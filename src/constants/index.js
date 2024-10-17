import {
  design,
  ai,
  unity,
  unrealc,
  unityc,
  csharp,
  photoshop,
  visualstudio,
  blender,
  firebase,
  playconsole,
  git,
  figma,
  digamend,
  rpgames,
  unreal,
  rivw,
  aoc,
  supremerangale,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Unity Developer",
    icon: unity,
  },
  {
    title: "Unreal Developer",
    icon: unreal,
  },
  {
    title: "Game Designer",
    icon: design,
  },
  {
    title: "AI Programmer",
    icon: ai,
  },
];

const technologies = [
  {
    name: "Unity",
    icon: unityc,
  },
  {
    name: "Unreal",
    icon: unrealc,
  },
  {
    name: "C-Sharp",
    icon: csharp,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Visual-Studio",
    icon: visualstudio,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "PlayConsole",
    icon: playconsole,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Team Lead",
    company_name: "Digamend Technology",
    icon: digamend,
    iconBg: "white",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Leading a development team to create innovative educational apps and interactive game projects, managing tasks and ensuring timely delivery",
      "Designing and implementing game mechanics with a focus on user engagement and immersive 3D experiences",
      "Transitioning from Firebase SDK to custom APIs, improving the app's scalability and control over data management.",
    ],
  },
  {
    title: "Unity Developer",
    company_name: "Red Panda Games studio",
    icon: rpgames,
    iconBg: "white",
    date: "Aug 2023 - Present",
    points: [
      "Developed engaging game mechanics for multiplayer games, ensuring smooth and responsive gameplay.",
      "Collaborated with cross-functional teams to design and implement key game features, from prototyping to final deployment.",
      "Optimized game performance and code to enhance user experience and ensure high frame rates across multiple devices.",
      "Contributed to the full game development lifecycle, including level design, asset integration, and bug fixing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RIVW",
    description:
      "RIVW is an immersive VR game where players explore stunning world-famous monuments using their own 3D models. You can experience these iconic sites with your loved ones, sharing their presence and sound in a beautifully realistic virtual world.",
    tags:[],
    image: rivw,
    source_code_link: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7194579413517148160",
  },
  {
    name: "Age Of Clashes",
    description:
      "Dive into the nostalgic echoes of Age of Empires with Age of Clashes, a thrilling PVP real-time strategy game. Balance your economy and military might to unleash strategic warfare, destroy opponent bases, and rise through the ranks!",
    tags: [],
    image: aoc,
    source_code_link: "https://play.google.com/store/apps/details?id=com.rpgames.ageofclashes&pcampaignid=web_share",
  },
  {
    name: "Supreme rangale",
    description:
      "Supreme Rangale invites you to dive into a lit 2.5D platformer, where you yeet through vibrant levels and flex your skills against epic challenges. Experience a thrilling adventure filled with tight controls and non-stop action that keeps you on your toes!",
    tags: [],
    image: supremerangale,
    source_code_link: "https://play.google.com/store/apps/details?id=com.DefaultCompany.carcrashing&pcampaignid=web_share",
  },
];

export { services, technologies, experiences, testimonials, projects };
