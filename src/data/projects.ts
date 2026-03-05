export interface CaseStudy {
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  goals: string[];
  screenshots: string[];
  caseStudy?: CaseStudy;
  category: "Website" | "Creative" | "AI" | "Lab";
}

export const projects: Project[] = [
  // Creative Digital Projects
  {
    id: "animal-vision",
    title: "Animal Vision Camera – People’s Bank (Vimanka)",
    category: "Creative",
    description: "An animal-vision simulator that uses camera input + pixel manipulation to recreate how animals see.",
    fullDescription: "A creative campaign required a unique interactive experience to visualize 'different perspectives.' I built an animal-vision simulator that uses camera input + pixel manipulation to recreate how cats, snakes, bees, and birds see.",
    tech: ["JavaScript", "TypeScript", "Canvas API", "getUserMedia API"],
    image: "https://picsum.photos/seed/vision/800/600",
    link: "https://merry-phoenix-e0c270.netlify.app/",
    github: "#",
    goals: ["Visualize different perspectives", "Real-time pixel manipulation", "Interactive camera experience"],
    screenshots: ["https://picsum.photos/seed/vision/1200/800"]
  },
  {
    id: "goya-spin",
    title: "GOYA Spin The Wheel",
    category: "Creative",
    description: "A fully animated promotional spinning wheel with easing, confetti, and sound.",
    fullDescription: "A promotional campaign needed an engaging digital mechanic to attract participants. I developed a fully animated spinning wheel with easing, confetti, sound, and result logic.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    image: "https://picsum.photos/seed/goya/800/600",
    link: "https://www.goyacompetition.com",
    github: "#",
    goals: ["Engage participants", "Smooth animation with easing", "Promotional impact"],
    screenshots: ["https://picsum.photos/seed/goya/1200/800"]
  },
  {
    id: "mental-health",
    title: "Mental Health Reflection App",
    category: "Creative",
    description: "A mood-check app with reflective questions inspired by CBT and reward psychology.",
    fullDescription: "We needed a simple, gentle interactive for a wellness initiative. I created a mood-check app with reflective questions inspired by basic CBT and reward psychology.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/mental/800/600",
    link: "https://heroic-quokka-a46c13.netlify.app/",
    github: "#",
    goals: ["Support wellness initiatives", "Gentle user interaction", "Reflective feedback"],
    screenshots: ["https://picsum.photos/seed/mental/1200/800"]
  },
  {
    id: "personality-finder",
    title: "Personality Finder",
    category: "Creative",
    description: "A personality reflection quiz with dynamic question flows and result mapping.",
    fullDescription: "A client needed an emotional-engagement tool. I developed a personality reflection quiz with dynamic question flows and result mapping.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/personality/800/600",
    link: "https://boisterous-entremet-66c304.netlify.app/",
    github: "#",
    goals: ["Emotional engagement", "Dynamic question flows", "Accurate result mapping"],
    screenshots: ["https://picsum.photos/seed/personality/1200/800"]
  },
  {
    id: "nutriline",
    title: "NutriLine – Kids’ Meal Analyzer",
    category: "Creative",
    description: "A nutrition calculator that analyzes meals and gives instant nutritional insights.",
    fullDescription: "During a child-nutrition campaign, we needed a quick nutrition calculator. I built a tool that analyzes meals and gives instant nutritional insights using a dataset.",
    tech: ["JavaScript", "Nutrition Dataset", "API"],
    image: "https://picsum.photos/seed/nutrition/800/600",
    link: "https://effulgent-cassata-e0fb3b.netlify.app/",
    github: "#",
    goals: ["Promote child nutrition", "Instant insights", "Easy to use for parents"],
    screenshots: ["https://picsum.photos/seed/nutrition/1200/800"]
  },
  {
    id: "ponds-skin-scanner",
    title: "AI Skin Scanner – Ponds",
    category: "Creative",
    description: "A lightweight AI-style scanner using image input + basic detection logic to simulate analysis.",
    fullDescription: "A campaign required a skin-analysis tool but no time for a full ML pipeline. I built a lightweight AI-style scanner using image input + basic detection logic to simulate analysis.",
    tech: ["HTML", "CSS", "JavaScript", "Image Processing"],
    image: "https://picsum.photos/seed/ponds/800/600",
    link: "https://rainbow-pithivier-e66577.netlify.app/",
    github: "#",
    goals: ["Simulate skin analysis", "Fast delivery for campaign", "Lightweight AI-style logic"],
    screenshots: ["https://picsum.photos/seed/ponds/1200/800"]
  },
  {
    id: "heart-rate-creator",
    title: "Heart Rate Image Creator",
    category: "Creative",
    description: "Converts BPM input into pixel-art 'emotional landscapes' with downloadable images.",
    fullDescription: "A creative brief needed something artistic + emotional. I created a tool that converts BPM input into pixel-art 'emotional landscapes' with downloadable images.",
    tech: ["Canvas API", "JavaScript"],
    image: "https://picsum.photos/seed/heart/800/600",
    link: "https://effortless-bubblegum-a8d658.netlify.app/",
    github: "#",
    goals: ["Artistic expression", "Emotional data visualization", "Downloadable artwork"],
    screenshots: ["https://picsum.photos/seed/heart/1200/800"]
  },
  {
    id: "pol-parapura",
    title: "Pol Parapura – Interactive Coconut Tree Experience",
    category: "Creative",
    description: "A hover-based coconut tree where each part reveals unique cultural details.",
    fullDescription: "We needed a cultural storytelling mechanic for a Sri Lankan brand. I designed a hover-based coconut tree where each part reveals unique details.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/coconut/800/600",
    link: "https://transcendent-faloodeh-a5675e.netlify.app/",
    github: "#",
    goals: ["Cultural storytelling", "Interactive education", "Brand engagement"],
    screenshots: ["https://picsum.photos/seed/coconut/1200/800"]
  },
  {
    id: "multilac-color-her",
    title: "Multilac – 'Color Her' Women’s Day Web App",
    category: "Creative",
    description: "A color-selection + silhouette customization tool with downloadable artwork.",
    fullDescription: "Women’s Day campaign needed a 'self-expression' activity. I built a color-selection + silhouette customization tool with downloadable artwork.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    image: "https://picsum.photos/seed/multilac/800/600",
    link: "https://funny-moonbeam-ffe62d.netlify.app/",
    github: "#",
    goals: ["Women's Day engagement", "Self-expression tool", "Brand awareness"],
    screenshots: ["https://picsum.photos/seed/multilac/1200/800"]
  },
  {
    id: "munchee-nekatha",
    title: "Munchee Online Nekatha (Avurudu Countdown)",
    category: "Creative",
    description: "A login + live timer system with festive styling for Avurudu campaign.",
    fullDescription: "An Avurudu campaign required a digital countdown to the auspicious time. I built a login + live timer system with festive styling.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/munchee/800/600",
    link: "https://mellifluous-otter-7d8407.netlify.app/",
    github: "#",
    goals: ["Festive engagement", "Live countdown", "User login system"],
    screenshots: ["https://picsum.photos/seed/munchee/1200/800"]
  },
  {
    id: "brand-caption",
    title: "Brand Caption Generator",
    category: "Creative",
    description: "A simple AI-powered caption generator for quick brand content ideas.",
    fullDescription: "Our team needed quick caption ideas for multiple brands. I built a simple AI-powered caption generator where users enter brand/tone and get instant content.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
    image: "https://picsum.photos/seed/caption/800/600",
    link: "https://magical-melomakarona-4b3187.netlify.app/",
    github: "#",
    goals: ["Internal efficiency", "AI content generation", "Multi-brand support"],
    screenshots: ["https://picsum.photos/seed/caption/1200/800"]
  },
  {
    id: "laptop-rec",
    title: "Laptop Recommendation Tool",
    category: "Creative",
    description: "A logic-based recommendation system based on budget + use-case.",
    fullDescription: "We needed a quick 'find your fit' interactive for a tech client. I created a logic-based recommendation system based on budget + use-case.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/laptop/800/600",
    link: "https://lively-pithivier-104411.netlify.app/",
    github: "#",
    goals: ["Customer guidance", "Logic-based selection", "Lead generation"],
    screenshots: ["https://picsum.photos/seed/laptop/1200/800"]
  },
  {
    id: "price-comparator",
    title: "Supermarket Price Comparator",
    category: "Creative",
    description: "A UI where users enter an item and instantly see cross-supermarket price comparison.",
    fullDescription: "A retail discussion required a quick example tool comparing grocery prices. I built a UI where users enter an item and instantly see cross-supermarket comparison.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/price/800/600",
    link: "https://darling-otter-35a327.netlify.app/",
    github: "#",
    goals: ["Price transparency", "Quick comparison", "Retail insights"],
    screenshots: ["https://picsum.photos/seed/price/1200/800"]
  },
  {
    id: "daintee-flipbook",
    title: "Daintee Hearts Recipe Flipbook",
    category: "Creative",
    description: "A digital recipe flipbook web experience with smooth page transitions.",
    fullDescription: "Daintee needed a digital version of their printed recipe booklet. I turned it into a flipbook web experience with smooth page transitions.",
    tech: ["HTML", "CSS", "JavaScript", "turn.js"],
    image: "https://picsum.photos/seed/flipbook/800/600",
    link: "https://stunning-marzipan-efb028.netlify.app/",
    github: "#",
    goals: ["Digital transformation", "Smooth reading experience", "Brand storytelling"],
    screenshots: ["https://picsum.photos/seed/flipbook/1200/800"]
  },
  {
    id: "multilac-picker",
    title: "Multilac Color Picker",
    category: "Creative",
    description: "An upload-to-color-extract system that matches dominant colors to Multilac’s palette.",
    fullDescription: "A campaign required an interactive color-matching tool. I built an upload-to-color-extract system that matches dominant colors to Multilac’s palette.",
    tech: ["Canvas", "JavaScript", "Color Thief"],
    image: "https://picsum.photos/seed/picker/800/600",
    link: "https://capable-longma-597f58.netlify.app/",
    github: "#",
    goals: ["Color extraction", "Brand matching", "Interactive design"],
    screenshots: ["https://picsum.photos/seed/picker/1200/800"]
  },
  {
    id: "winner-selector",
    title: "Random Winner Selector",
    category: "Creative",
    description: "A simple list input to randomizer with animated reveal for giveaways.",
    fullDescription: "For giveaways, we needed a fast, fair winner picker. I built a simple list input → randomizer → animated reveal tool.",
    tech: ["JavaScript"],
    image: "https://picsum.photos/seed/winner/800/600",
    link: "https://marvelous-cendol-4bf7ae.netlify.app/",
    github: "#",
    goals: ["Fair giveaways", "Animated reveal", "Easy input"],
    screenshots: ["https://picsum.photos/seed/winner/1200/800"]
  },
  {
    id: "para-gen",
    title: "Random Paragraph Generator",
    category: "Creative",
    description: "An internal tool to quickly generate filler text for mockups.",
    fullDescription: "Created as an internal tool to quickly generate filler text for mockups.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/text/800/600",
    link: "https://fancy-muffin-0c07b1.netlify.app/",
    github: "#",
    goals: ["Internal productivity", "Mockup support", "Fast text generation"],
    screenshots: ["https://picsum.photos/seed/text/1200/800"]
  },
  {
    id: "christmas-tree-gen",
    title: "Christmas Tree Generator",
    category: "Creative",
    description: "A festive interactive tool to generate and customize your own digital Christmas tree.",
    fullDescription: "A holiday-themed interactive experience allowing users to generate and customize digital Christmas trees.",
    tech: ["React", "Motion", "Tailwind"],
    image: "https://picsum.photos/seed/christmas/800/600",
    link: "https://teddy-christmas-tree.vercel.app/",
    github: "#",
    goals: ["Festive engagement", "User customization", "Interactive holiday experience"],
    screenshots: ["https://picsum.photos/seed/christmas/1200/800"]
  },

  // Website Projects
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    category: "Website",
    description: "A modern, high-performance personal portfolio showcasing digital expertise.",
    fullDescription: "A comprehensive showcase of professional work, skills, and projects with a focus on modern UI/UX and performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Motion"],
    image: "https://picsum.photos/seed/portfolio/800/600",
    link: "https://dinushaportfolionew.vercel.app/",
    github: "#",
    goals: ["Professional branding", "Project showcase", "High performance"],
    screenshots: ["https://picsum.photos/seed/portfolio/1200/800"]
  },
  {
    id: "market-store",
    title: "Online Market Store - Little Heart Bakes",
    category: "Website",
    description: "A full-featured e-commerce platform for a bakery with order management.",
    fullDescription: "An online marketplace for 'Little Heart Bakes' featuring product listings, cart functionality, and order processing.",
    tech: ["React", "E-commerce", "Tailwind CSS"],
    image: "https://picsum.photos/seed/bakery/800/600",
    link: "https://little-heart-bakes.base44.app/",
    github: "#",
    goals: ["E-commerce sales", "Order management", "Brand presence"],
    screenshots: ["https://picsum.photos/seed/bakery/1200/800"]
  },
  {
    id: "digital-agency-brandsen",
    title: "Digital Agency - Brandsen",
    category: "Website",
    description: "A sleek, professional landing page for a digital marketing agency.",
    fullDescription: "A high-conversion landing page for Brandsen agency, focusing on service presentation and lead generation.",
    tech: ["React", "Tailwind CSS", "Motion"],
    image: "https://picsum.photos/seed/agency/800/600",
    link: "https://brandsen.vercel.app/",
    github: "#",
    goals: ["Lead generation", "Service showcase", "Agency branding"],
    screenshots: ["https://picsum.photos/seed/agency/1200/800"]
  },
  {
    id: "vork-global",
    title: "Vork Global",
    category: "Website",
    description: "A corporate platform for global workforce solutions and recruitment.",
    fullDescription: "A professional platform for Vork Global, facilitating recruitment and workforce management on a global scale.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "https://picsum.photos/seed/vork/800/600",
    link: "https://vorkglobal.vercel.app/",
    github: "#",
    goals: ["Corporate branding", "Recruitment platform", "Global reach"],
    screenshots: ["https://picsum.photos/seed/vork/1200/800"]
  },
  {
    id: "nutrigpt-landing",
    title: "NutriGPT Landing Page",
    category: "Website",
    description: "A high-conversion landing page for an AI-powered nutrition assistant.",
    fullDescription: "Landing page for NutriGPT, highlighting the benefits of AI in personalized nutrition and health tracking.",
    tech: ["React", "Tailwind CSS", "AI Integration"],
    image: "https://picsum.photos/seed/nutrigpt/800/600",
    link: "https://nutrigpt-h37z.vercel.app/",
    github: "#",
    goals: ["Product launch", "User acquisition", "Feature showcase"],
    screenshots: ["https://picsum.photos/seed/nutrigpt/1200/800"]
  },

  // AI Powered Softwares
  {
    id: "aurum-bookings",
    title: "Aurum Bookings",
    category: "AI",
    description: "An AI-enhanced booking system for premium services and resource management.",
    fullDescription: "A sophisticated booking platform using AI to optimize scheduling and resource allocation for high-end clients.",
    tech: ["React", "Node.js", "AI Scheduling"],
    image: "https://picsum.photos/seed/booking/800/600",
    link: "https://aurum-bookings.vercel.app/login",
    github: "#",
    goals: ["Optimize scheduling", "Premium user experience", "Resource management"],
    screenshots: ["https://picsum.photos/seed/booking/1200/800"]
  },
  {
    id: "visage-ai",
    title: "VisageAI - Face & Hairstyle Identifier",
    category: "AI",
    description: "AI-powered face scanner that identifies facial features and recommends hairstyles.",
    fullDescription: "A cutting-edge AI tool that uses computer vision to analyze face shapes and suggest the most flattering hairstyles.",
    tech: ["Computer Vision", "AI", "React"],
    image: "https://picsum.photos/seed/face/800/600",
    link: "https://visageai-iota.vercel.app/",
    github: "#",
    goals: ["Personalized styling", "AI analysis", "User engagement"],
    screenshots: ["https://picsum.photos/seed/face/1200/800"]
  },
  {
    id: "fellowship-tz",
    title: "Fellowship TZ",
    category: "AI",
    description: "An AI-driven community platform for professional networking and collaboration.",
    fullDescription: "A platform that uses AI to connect professionals based on skills, interests, and project needs.",
    tech: ["React", "AI Matching", "Tailwind CSS"],
    image: "https://picsum.photos/seed/fellowship/800/600",
    link: "https://fellowship-tz.vercel.app/",
    github: "#",
    goals: ["Professional networking", "AI-driven matching", "Collaboration hub"],
    screenshots: ["https://picsum.photos/seed/fellowship/1200/800"]
  },
  {
    id: "nutrigpt-companion",
    title: "NutriGPT Health Companion",
    category: "AI",
    description: "A comprehensive AI health companion for personalized nutrition and wellness tracking.",
    fullDescription: "The full NutriGPT application, providing AI-powered meal analysis, health insights, and personalized wellness plans.",
    tech: ["React", "AI", "Health Data API"],
    image: "https://picsum.photos/seed/health/800/600",
    link: "https://nutrigpt-new.vercel.app/",
    github: "#",
    goals: ["Personalized wellness", "AI health insights", "Continuous tracking"],
    screenshots: ["https://picsum.photos/seed/health/1200/800"]
  },
  {
    id: "kala-verse",
    title: "Kala Verse - AI Marketing Tool",
    category: "AI",
    description: "A one-stop AI tool for digital marketing agencies to automate content and strategy.",
    fullDescription: "Kala Verse empowers agencies with AI-driven content generation, market analysis, and campaign optimization tools.",
    tech: ["React", "AI Content Gen", "Marketing API"],
    image: "https://picsum.photos/seed/marketing/800/600",
    link: "https://cc-kala-verse.vercel.app/",
    github: "#",
    goals: ["Agency automation", "Content optimization", "Market intelligence"],
    screenshots: ["https://picsum.photos/seed/marketing/1200/800"]
  },
  {
    id: "pick-her",
    title: "Pick Her",
    category: "AI",
    description: "An AI-powered selection and recommendation tool for personalized choices.",
    fullDescription: "A smart recommendation engine using AI to help users make better decisions based on their preferences.",
    tech: ["React", "AI Recommendation", "Tailwind CSS"],
    image: "https://picsum.photos/seed/pick/800/600",
    link: "https://pick-her.vercel.app/",
    github: "#",
    goals: ["Personalized choice", "AI assistance", "User decision support"],
    screenshots: ["https://picsum.photos/seed/pick/1200/800"]
  },

  // Other internal/lab projects
  {
    id: "order-beverage",
    title: "ORDER – Beverage Preference System",
    category: "Lab",
    description: "A full system for internal beverage management with dashboards and floor-wise counts.",
    fullDescription: "We had an internal problem: the tea/coffee aunty had to climb stairs repeatedly. I built a full system: input forms + conference mode + dashboard calculating floor-wise beverage counts.",
    tech: ["HTML", "CSS", "JavaScript", "Charts.js"],
    image: "https://picsum.photos/seed/order/800/600",
    link: "https://prismatic-eclair-4f74db.netlify.app/",
    github: "#",
    goals: ["Solve internal workflow problem", "Real-time dashboard", "Efficiency improvement"],
    screenshots: ["https://picsum.photos/seed/order/1200/800"]
  },
  {
    id: "mini-utilities",
    title: "Mini Utilities Collection",
    category: "Lab",
    description: "A collection of fast internal tools: RGB Selector, BMI Calculator, Love Calculator, and more.",
    fullDescription: "Each of these was built to solve a fast internal requirement or workshop need. They include an RGB Color Selector, BMI Calculator, Love Calculator, and other mini utilities.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://picsum.photos/seed/utils/800/600",
    link: "https://luxury-platypus-e0e4a7.netlify.app/",
    github: "#",
    goals: ["Fast internal solutions", "Workshop support", "Utility development"],
    screenshots: ["https://picsum.photos/seed/utils/1200/800"]
  },
  {
    id: "under-development",
    title: "Future Innovations",
    category: "Lab",
    description: "New projects and experimental solutions are currently under development.",
    fullDescription: "I am constantly learning and building new tools. This space is reserved for the next wave of problem-solving applications.",
    tech: ["Next.js", "AI", "Web3"],
    image: "https://picsum.photos/seed/future/800/600",
    link: "#",
    github: "#",
    goals: ["Continuous learning", "Future growth", "Innovation"],
    screenshots: ["https://picsum.photos/seed/future/1200/800"]
  }
];

