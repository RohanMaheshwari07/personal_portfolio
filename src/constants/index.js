import {
  mobile,
  backend,
  web,
  creator,
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
  dxfarm,
  pricescience,
  collect,
  abhishah,
  anshulgoyal,
  rupanshutandon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "/#about"
  },
  {
    id: "work",
    title: "Work",
    link: "/#work"
  },
  {
    id: "contact",
    title: "Contact",
    link: "/#contact"
  },
  {
    id: "avatar-interaction",
    title: "Avatar Interaction",
    link: "/avatar-interaction",
    new: true
  }
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
  {
    title: "MERN Developer",
    icon: creator,
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
    "Rohan, an exceptional software engineer known for unwavering commitment to perfection and remarkable attention to detail. His dedication to continuous learning sets an inspiring example for peers.",
    name: "Rupanshu Tandon",
    designation: "SE Associate Director",
    company: "Cargill",
    image: rupanshutandon,
    link: "https://www.linkedin.com/in/rupanshu-tandon/",
  },
  {
    testimonial:
      "Rohan is an outstanding professional who consistently demonstrates a 'never say no' attitude, always stepping up to the plate to handle any challenge that comes our way. What truly distinguishes him, is his relentless pursuit of excellence.",
    name: "Anshul Goyal",
    designation: "Tech Lead",
    company: "Cargill",
    image: anshulgoyal,
    link: "https://www.linkedin.com/in/anshulgoyal91/",
  },
  {
    testimonial:
      "Rohan's an excellent addition to any team. He is a quick learner and quite diligent in any task assigned to him. He would go the extra mile in making sure the task is being finished in the best possible way.",
    name: "Abhi Shah",
    designation: "Tech Lead",
    company: "Crest Data Systems",
    image: abhishah,
    link: "https://www.linkedin.com/in/abhi4193/",
  },
 
];

const projects = [
  {
    name: "DxFarm",
    description:
      "DxFarm, a collaborative project in partnership with Heifer, is a revolutionary app designed to empower poultry farmers. It offers a comprehensive solution for managing produce, fostering communication, and connecting farmers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "blue-text-gradient",
      },
    ],
    image: dxfarm,
  },
  {
    name: "Price Science",
    description:
      "Price Science, redefines trading for Cargill professionals. Leveraging advanced AI algorithms, it provides real-time guidance, enabling traders to make informed decisions swiftly. With its user-friendly interface, Price Science empowers traders to navigate complex markets effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: pricescience,
  },
  {
    name: "Collect",
    description:
      "A comprehensive web based solution for facilitating collection of data in real time for our machine learning models. Collect, boasts special features such as `Annotation Wing`, for helping in annotating the videos and images collected.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "okta",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: collect,
  },
];

export { services, technologies, experiences, testimonials, projects };
