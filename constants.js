export const METADATA = {
  author: "Shubh Sonigra",
  title: "Portfolio | Shubh Sonigra",
  description:
    "Shubh Sonigra is a passionate Fullstack Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@Shubh_5278",
  keywords: [
    "Shubh Sonigra",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Developer",
  "I build things for the web",
  "I create aesthetic and modern websites",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: shubhsonigra52@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shubh-sonigra/",
  },
  {
    name: "github",
    url: "https://github.com/shubh5278",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/shubhh__.18?igsh=MTY1enp3eWttN2phNg==",
  },
  {
    name: "twitter",
    url: "https://x.com/Shubh_5278?t=mzSyDu-NGOKXCQn8O5xynQ&s=08",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    // "vite",
    "firebase",
    "figma",
    // "tanstack-query",
    "php",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    // "styledcomponents",
    // "antdesign",
    // "chakra-ui",
    "laravel",

  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "github", "apis"],
};

export const PROJECTS = [
  {
    name: "Empowr360",
    image: "/projects/empowr360.webp",
    blurImage: "/projects/blur/empowr360.webp",
    description: "Empowering users with Laravel and MySQL. 🛏️",
    gradient: ["#3a9c94", "#3A9C94"],
    url: "https://empowr360.com/",
    tech: ["php", "laravel", "javascript", "mysql",],
  },
  {
    name: "G-Mart",
    image: "/projects/ecommerce.webp",
    blurImage: "/projects/blur/ecommerce.webp",
    description: "Built with React, TypeScript, MongoDB + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://g-mart-23zd.vercel.app",
    tech: ["typescript", "react", "tailwindcss", "apis"],
  },
  {
    name: "Devja-Vu(Chrome Extension)",
    image: "/projects/dejavu.webp",
    blurImage: "/projects/blur/dejavu.webp",
    description:
      "AI Chrome extension with JavaScript and HTML-CSS 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://chromewebstore.google.com/detail/deja-vu-ai-powerd-tool/fhhpmicpjmegopoolojoofmkokajplfc",
    tech: ["html", "javascript", "css"],
  },
  {
    name: "Shivi Perfumery",
    image: "/projects/shivi1.webp",
    blurImage: "/projects/blur/shivi.webp",
    description: "Built with Laravel, MySQL, and payment APIs. 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://shiviperfumery.digibread.ca/",
    tech: ["php", "laravel", "mysql", "apis", "javascript"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DIGIBREAD: [
    {
      title: "Digibread Creative LLP",
      description:
        "DigiBread India is a digital solutions company specializing in web development and technology services.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Work",
      description:
        "Designed and developed responsive, dynamic websites utilizing PHP and the Laravel framework. Created intuitive front-end interfaces with HTML, CSS, JavaScript, and PHP to enhance user experience. Integrated APIs and third-party services to expand and streamline application functionality. Partnered with back-end developers to optimize performance and maintain smooth data flow across platforms. Performed debugging and troubleshooting to ensure cross-browser compatibility and functionality.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Fullstack Developer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Fullstack Developer
        </div>
      ),
    },
    {
      title: "Internt",
      description:
        "Started as an intern, gaining hands-on experience in web development and contributing to various projects at DigiBread India.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Fullstack Developer Intern
        </div>
      ),
    },
  ],
  Iteam: [
    {
      title: "I-team Technology",
      description:
        "In this Internship I got the opportunity to implement my theoritical knowlege of C, C++, Javascript, HTML, Database (MySQL), PHP in project I Team Technology.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I am a part of small sacle project in which I'll get the knowledge of Web development, Responsive Desings and coding at industrial level. Designed and developed a dynamic e-commerce platform with a dual login system for sellers and customers. The platform seamlessly manages seller inventories while dynamically displaying products on the front end for customers. Features include real-time product updates, user-friendly dashboards, and efficient data flow between users, ensuring an interactive and responsive experience for both parties.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Fullstack Developer Intern
        </div>
      ),
    },
  ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
