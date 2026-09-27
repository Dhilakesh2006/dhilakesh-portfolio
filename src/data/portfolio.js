// Single source of truth for portfolio content.
// Edit this file to update the site — no need to touch components.

export const profile = {
  name: "Dhilakesh B",
  initials: "DB",
  role: "Java Full Stack Developer",
  location: "Ramanathapuram, Tamil Nadu, India",
  email: "dhilakesh5@gmail.com",
  phone: "+91-9500354850",
  github: "https://github.com/Dhilakesh2006",
  linkedin: "https://linkedin.com/in/Dhilakesh2006",
  leetcode: "https://leetcode.com/u/DHILAKESH19OFCL/",
  resumeFile: "/resume.pdf",
  tagline:
    "Final-year Computer Science and Engineering student building practical software with Java, Spring Boot, ReactJS, and modern web technologies.",
  heroStack: [
    "Java",
    "Spring Boot",
    "React.js",
    "REST APIs",
    "SQL",
    "Full Stack Development",
  ],
  about: [
    "I'm a final-year B.E. Computer Science and Engineering student focused on Java full stack development. I like taking a feature from a blank file to something a user can actually click through — backend logic, database schema, and the interface that sits on top of it.",
    "Most of what I know comes from building: a Spring Boot API with proper layering and JWT auth, a React + Spring Boot food delivery app, a React storefront, and a three-month internship where I shipped real features end to end. I'm comfortable moving between Java and JavaScript, and I enjoy debugging just as much as building — finding why something broke usually teaches me more than getting it right the first time.",
    "Alongside coursework, I practice Data Structures and Algorithms regularly on LeetCode to stay sharp for interviews, and I'm curious about where AI is heading and how it fits into everyday software. I'm looking for an entry-level role where I can keep learning by working on real, production-facing code.",
  ],
  education: {
    school: "Mahendra College of Engineering, Salem",
    degree: "B.E. Computer Science and Engineering",
    period: "2023 – 2027",
    detail: "CGPA: 7.25",
    coursework: [
      "Data Structures and Algorithms (Java)",
      "Object-Oriented Programming",
      "Full Stack Development",
      "Database Management Systems",
      "Software Engineering",
    ],
  },
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "SQL", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "ReactJS", "JavaScript (ES6+)", "TypeScript","Custom Hooks"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "Hibernate",
      "JDBC",
      "REST APIs",
      "JWT",
      "Microservices",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Core Computer Science",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Java Collections",
      "Exception Handling",
      "Multithreading",
      "JPA / Hibernate",
    ],
  },
  {
    category: "Tools & Development",
    items: ["Git", "GitHub", "Postman", "VS Code", "Eclipse"],
  },
  {
    category: "Testing & Practices",
    items: ["JUnit", "REST API Testing", "Debugging", "Problem Solving"],
  },
];

export const experience = [
  {
    company: "Stellera Edu Tech",
    role: "Full Stack Development Intern",
    period: "Oct 2025 – Dec 2025",
    points: [
      "Built frontend and backend modules for a web application, delivering features end-to-end from UI to database integration.",
      "Integrated REST APIs and developed dynamic application functionality based on project requirements.",
      "Developed CRUD operations and database queries for core application data management.",
      "Tested and debugged application modules, resolving functional issues before release to improve application reliability.",
      "Collaborated with team members throughout development, testing, and maintenance cycles to deliver assigned features on schedule.",
    ],
  },
];

export const projects = [

   {
    title: "Food Delivery Application",
    description:
      "A complete full-stack food delivery application built with ReactJS and Java Spring Boot, covering the entire flow from browsing to order placement.",
    points: [
      "▸ Built the ReactJS frontend with authentication, restaurant/food browsing, cart management, and order placement.",
      "Developed the Java Spring Boot backend with REST APIs connecting the frontend to a PostgreSQL database.",
      "Implemented CRUD operations and structured data handling for restaurants, orders, and user accounts."
    ],
    tech: ["ReactJS", "Java", "Spring Boot", "PostgreSQL", "JWT" , "Hibernate"],
    github: null,
    demo: null,
    
  },
  {
    title: "Product Management REST API",
    description:
      "A RESTful API in Java and Spring Boot with full CRUD operations for product management.",
    points: [
      "Applied JWT-based authentication and authorization using Spring Security, including access and refresh token handling.",
      "Structured the API with Spring Data JPA and PostgreSQL across Controller, Service, Repository, Entity, and DTO layers.",
      "Added global exception handling for consistent, predictable API error responses.",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "PostgreSQL"],
    github: "https://github.com/Dhilakesh2006/Dhilakesh-Springboot-project",
    demo: null,
    status: null,
  },
 
  {
    title: "E-Commerce Web Application",
    description:
      "A responsive e-commerce web application for product browsing and online shopping.",
    points: [
      "Developed reusable React components for dynamic product rendering and cart management.",
      "Designed responsive interfaces for product listings and seamless page-to-page navigation.",
    ],
    tech: ["ReactJS", "JavaScript", "HTML5", "CSS3"],
    github: null,
    demo: null,
    status: null,
  },
];

export const achievements = [
  {
    title: "Finalist, CATCH 26 Hackathon",
    detail:
      "Selected as a finalist among participants across Mahendra Institutions.",
  },
];

export const certifications = [
  {
    title: "Full Stack Development Course",
    issuer: "GUVI",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "Stellera Edu Tech",
  },
  {
    title: "ReactJS Development Certification",
    issuer: "Infosys Springboard",
  },
  {
    title: "JavaScript Programming Certification",
    issuer: "Infosys Springboard",
  },
  {
    title: "Programming in Core Java",
    issuer: "Udemy",
  },
];

// Real, publicly-visible LeetCode data as of this build — pulled from the
// profile page itself. LeetCode doesn't offer a public numbers API, so this
// is a manual snapshot rather than a live feed: update `solvedJava` and
// `topics` here whenever you want the site to reflect fresh numbers.
export const coding = {
  platform: "LeetCode",
  profileUrl: "https://leetcode.com/u/DHILAKESH19OFCL/",
  solvedJava: 19,
  snapshotNote: "Snapshot from LeetCode profile — updated manually",
  topics: [
    "Array",
    "Two Pointers",
    "Sorting",
    "Binary Search",
    "Hash Table",
    "Bit Manipulation",
    "Dynamic Programming",
    "Divide and Conquer",
  ],
  focus: [
    "Data Structures",
    "Algorithms",
    "Java Programming",
    "Coding Interview Preparation",
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Coding", href: "#coding" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
