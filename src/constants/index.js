import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  mui,
  nodejs,
  mongodb,
  git,
  docker,
  cargill,
  linkedin,
  splunk,
  carrent,
  jobit,
  tripguide,
  threejs,
  abhishah,
  anshulgoyal
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
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "BackEnd Developer",
    icon: mobile,
  },
  {
    title: "DevOps Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Cargill",
    icon: cargill,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "Proficiently managed React.js and Node.js technologies for frontend development and MySQL databases for backend tasks, ensuring end-to-end application development.",
      "Led teams, mentored junior developers, and maintained coding standards, resulting in efficient collaboration and timely project completion.",
      "Designed microservices architecture to enhance scalability, reduce downtime, and improve overall application performance.",
      "Conducted performance analysis, implemented optimization strategies, and achieved significant performance improvements for critical components.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "LinkedIn - Third Party",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Splunk - Third Party",
    icon: splunk,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Mar 2022",
    points: [
      "Developed and upgraded the various different open-source SDKs of Splunk, currently hosted on GitHub.",
      "Designed and released various versions of the SDKs along with giving sessions to the team regarding Splunk Enterprise.",
      "Updated various different outdated libraries to their latest versions, along with publishing them to official platforms",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rohan's an excellent addition to any team. He is a quick learner and quite diligent in any task assigned to him. He would go the extra mile in making sure the task is being finished in the best possible way.",
    name: "Abhi Shah",
    designation: "Tech Lead",
    company: "Crest Data Systems",
    image: abhishah,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Anshul Goyal",
    designation: "Tech Lead",
    company: "Cargill",
    image: anshulgoyal,
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
    image: carrent,
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
    image: jobit,
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
