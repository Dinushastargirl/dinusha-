import express from 'express';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'leads.db');
const db = new Database(dbPath, { verbose: console.log });

// Create leads table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    country TEXT,
    service_selected TEXT,
    package_interest TEXT,
    project_description TEXT,
    timeline TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.use(express.json());

// Enable CORS for fallback dev environments
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Endpoint to handle lead submissions
app.post('/api/leads', (req, res) => {
  const {
    name,
    companyName,
    email,
    phone,
    country,
    serviceSelected,
    packageInterest,
    projectDescription,
    timeline
  } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required fields.' });
  }

  try {
    const insertStmt = db.prepare(`
      INSERT INTO leads (
        name, company_name, email, phone, country, 
        service_selected, package_interest, project_description, timeline
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insertStmt.run(
      name,
      companyName || null,
      email,
      phone || null,
      country || null,
      serviceSelected || null,
      packageInterest || null,
      projectDescription || null,
      timeline || null
    );

    // MOCK ADMIN EMAIL NOTIFICATION
    console.log('\n==================================================');
    console.log('📬 NEW MOCK ADMIN EMAIL NOTIFICATION');
    console.log('Subject: New Proposal Request Submitted via Beulex');
    console.log(`To: admin@beulex.studio`);
    console.log('--------------------------------------------------');
    console.log(`Name:        ${name}`);
    console.log(`Company:     ${companyName || 'N/A'}`);
    console.log(`Email:       ${email}`);
    console.log(`Phone:       ${phone || 'N/A'}`);
    console.log(`Country:     ${country || 'N/A'}`);
    console.log(`Service:     ${serviceSelected || 'N/A'}`);
    console.log(`Package:     ${packageInterest || 'N/A'}`);
    console.log(`Timeline:    ${timeline || 'N/A'}`);
    console.log(`Description: ${projectDescription || 'N/A'}`);
    console.log('==================================================\n');

    return res.status(201).json({
      success: true,
      message: 'Lead registered successfully.',
      leadId: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error inserting lead into database:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to retrieve leads (for debugging / admin view)
app.get('/api/leads', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM leads ORDER BY created_at DESC');
    const leads = stmt.all();
    return res.json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Beulex Lead API Server is running on http://localhost:${PORT}`);
  console.log(`📂 Database path: ${dbPath}`);
});
