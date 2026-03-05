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
  category: "Web" | "App" | "Lab" | "Design";
}

export const projects: Project[] = [
  {
    id: "animal-vision",
    title: "Animal Vision Camera – People’s Bank (Vimanka)",
    category: "Lab",
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
    category: "Web",
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
    category: "App",
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
    id: "ponds-skin-scanner",
    title: "AI Skin Scanner – Ponds",
    category: "Lab",
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
    id: "personality-finder",
    title: "Personality Finder",
    category: "Web",
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
    category: "App",
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
    id: "heart-rate-creator",
    title: "Heart Rate Image Creator",
    category: "Design",
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
    id: "order-beverage",
    title: "ORDER – Beverage Preference System",
    category: "App",
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
    id: "multilac-color-her",
    title: "Multilac – 'Color Her' Women’s Day Web App",
    category: "Web",
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
    id: "pol-parapura",
    title: "Pol Parapura – Interactive Coconut Tree Experience",
    category: "Web",
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
    id: "munchee-nekatha",
    title: "Munchee Online Nekatha (Avurudu Countdown)",
    category: "Web",
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
    category: "Lab",
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
    category: "App",
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
    category: "App",
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
    category: "Design",
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
    category: "Design",
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
    category: "App",
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
    category: "Lab",
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
    id: "mini-utilities",
    title: "Mini Utilities Collection",
    category: "App",
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
