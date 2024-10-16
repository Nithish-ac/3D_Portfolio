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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: unityc,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: unityc,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: unityc,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
