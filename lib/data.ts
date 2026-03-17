// ─── Types ──────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categories: string[];
  client: string;
  year: string;
  thumbnail: string;
  aspect: "square" | "portrait" | "landscape";
  description: string;
  tags: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}


export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Skill {
  label: string;
  level: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { label: "Premiere Pro", level: 98 },
  { label: "After Effects", level: 95 },
  { label: "DaVinci Resolve", level: 90 },
  { label: "Motion Design", level: 92 },
  { label: "Color Grading", level: 96 },
  { label: "Sound Design", level: 80 },
  { label: "3D Animation", level: 82 },
  { label: "Storytelling", level: 97 },
];

export const services: Service[] = [
  {
    id: "reels",
    icon: "📱",
    title: "Instagram Reels & TikTok Editing",
    description:
      "Trend-focused, engaging short-form videos designed to maximize reach and retention.",
    features: ["Trend Focus", "High Retention", "Viral Hooks", "Sound Design"],
  },
  {
    id: "shorts",
    icon: "🚀",
    title: "YouTube Shorts",
    description:
      "High-impact vertical videos optimized for YouTube's specific short-form algorithm.",
    features: ["Vertical Mastery", "Algorithm Readability", "Fast-Paced", "Engagement"],
  },
  {
    id: "faceless",
    icon: "🎭",
    title: "Faceless Content Creation",
    description:
      "Professional editing for faceless channels utilizing premium visuals, stock footage, and strong storytelling.",
    features: ["Stock Integration", "Animations", "B-Roll Masters", "Voiceover Sync"],
  },
  {
    id: "documentary",
    icon: "🎬",
    title: "Documentary & Storytelling",
    description:
      "Narrative-driven edits that present stories in a compelling, emotional, and cinematic way.",
    features: ["Narrative Flow", "Cinematic Grades", "Pacing", "Story Arcs"],
  },
  {
    id: "jumpcuts",
    icon: "⚡",
    title: "Fast-Paced Editing & Jump Cuts",
    description:
      "Dynamic editing styles that maintain viewer attention, eliminate dead air, and significantly improve watch time.",
    features: ["High Energy", "Retention Focus", "Jump Cuts", "Dynamic Pacing"],
  },
  {
    id: "graphics",
    icon: "✨",
    title: "Motion Graphics & Subtitles",
    description:
      "Clean animations, visual elements, and engaging subtitles that enhance clarity and viewer engagement.",
    features: ["Animated Text", "Pop-up Graphics", "Visual Elements", "Readability"],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Echoes of Silence",
    category: "Film",
    categories: ["film", "color"],
    client: "Luminary Studios",
    year: "2024",
    thumbnail: "/portfolio/film1.jpg",
    aspect: "landscape",
    description: "Award-winning short film with bespoke color grade",
    tags: ["Editing", "Color", "Sound"],
  },
  {
    id: "p2",
    title: "Horizon Brand Story",
    category: "Motion",
    categories: ["motion", "corporate"],
    client: "Horizon Tech",
    year: "2024",
    thumbnail: "/portfolio/motion1.jpg",
    aspect: "portrait",
    description: "Full motion graphics package and brand film",
    tags: ["Motion", "Animation", "Brand"],
  },
  {
    id: "p3",
    title: "Neon Dreams",
    category: "Music Video",
    categories: ["film", "vfx"],
    client: "Lyra Records",
    year: "2023",
    thumbnail: "/portfolio/film2.jpg",
    aspect: "landscape",
    description: "Cyberpunk music video with advanced VFX compositing",
    tags: ["VFX", "Color", "Editing"],
  },
  {
    id: "p4",
    title: "Summit Campaign",
    category: "Corporate",
    categories: ["corporate", "motion"],
    client: "Summit Financial",
    year: "2024",
    thumbnail: "/portfolio/corp1.jpg",
    aspect: "square",
    description: "Multi-part corporate campaign series",
    tags: ["Corporate", "Motion", "Sound"],
  },
  {
    id: "p5",
    title: "Pulse — Global Launch",
    category: "Social",
    categories: ["social", "motion"],
    client: "Pulse Fitness",
    year: "2023",
    thumbnail: "/portfolio/social1.jpg",
    aspect: "portrait",
    description: "Viral social media campaign reaching 50M+ views",
    tags: ["Social", "Animation", "Brand"],
  },
  {
    id: "p6",
    title: "Wild Time-lapse Series",
    category: "Documentary",
    categories: ["film", "color"],
    client: "NatGeo Digital",
    year: "2023",
    thumbnail: "/portfolio/film3.jpg",
    aspect: "landscape",
    description: "6-part nature documentary series",
    tags: ["Editing", "Color", "Grading"],
  },
];

export const portfolioCategories = [
  "all",
  "film",
  "motion",
  "vfx",
  "corporate",
  "social",
  "color",
];

export const processSteps: ProcessStep[] = [
  {
    id: "s1",
    number: "01",
    title: "Discovery",
    icon: "🔭",
    description:
      "Understanding your vision, audience, and goals through an in-depth creative brief.",
  },
  {
    id: "s2",
    number: "02",
    title: "Strategy",
    icon: "🗺️",
    description:
      "Crafting a bespoke creative roadmap — mood boards, style references, and edit structure.",
  },
  {
    id: "s3",
    number: "03",
    title: "Production",
    icon: "🎬",
    description:
      "Frame-by-frame editing, motion design, and color grading executed to the highest standard.",
  },
  {
    id: "s4",
    number: "04",
    title: "Review",
    icon: "👁️",
    description:
      "Collaborative revision rounds ensuring every detail aligns with your creative vision.",
  },
  {
    id: "s5",
    number: "05",
    title: "Delivery",
    icon: "🚀",
    description:
      "Master files delivered in all required formats, ready for any platform, on schedule.",
  },
];

export const stats: Stat[] = [
  {
    id: "st1",
    value:100,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across 6 continents",
  },
  {
    id: "st2",
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "In cinematic production",
  },
  {
    id: "st3",
    value: 10,
    suffix: "M+",
    label: "Total Views",
    description: "Across all client content",
  },
];
