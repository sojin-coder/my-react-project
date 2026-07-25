const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks like React to build responsive, real-world web applications from scratch.",
    image:
      "https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg",
    duration: "32h 20m",
    student:"12,500 students",
   
    price: "49.99",
    rating:"4.9",
    instructor: "John Doe",
    learn: [
      "Build responsive websites",
      "Master HTML, CSS, JavaScript",
      "Learn React & modern tools",
      "Deploy real projects",
    ],
    curriculum: [
      { title: "Introduction to Web Development", time: "1h 30m" },
      { title: "HTML & CSS Fundamentals", time: "3h 40m" },
      { title: "JavaScript Essentials", time: "4h 20m" },
      { title: "React Framework", time: "5h 10m" },
      { title: "Building Real Projects", time: "2h 50m" },
    ],
   
  },
  {
    id: 2,
    title: "Python for Data Science",
    description:
      "Master Python programming and data analysis with pandas, NumPy, and visualization libraries for data science projects.",
    image:
      "https://img-c.udemycdn.com/course/480x270/1754098_e0df_3.jpg",
    duration: "15h 45m",
     student:"12,500 students",
    price: "59.99",
    rating:"4.9",
    instructor: "Jane Smith",
     learn: [
      "Write Python code for data analysis and manipulation",
      "Use pandas and NumPy for efficient data processing",
      "Create data visualizations with Matplotlib and Seaborn",
      "Apply statistical methods to real-world datasets",
      
     
    ],
    Requirements:[
      "Basic computer skills",
      "Interest in data analysis and statistics",
      "No programming experience needed",
    ],
    curriculum: [
      { title: "Python Basics", time: "2h 10m" },
      { title: "Data Structures", time: "1h 50m" },
      { title: "Pandas & NumPy", time: "3h 15m" },
      { title: "Data Visualization", time: "2h 40m" },
      { title: "Real-World Projects", time: "2h 30m" },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    description:
      "Create stunning user interfaces and experiences using Figma, Adobe XD, and industry-standard design principles.",
    image:
      "https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg",
    duration: "10h 20m",
    price: "44.99",
    instructor: "Mike Johnson",
     student:"9,800 students",
     rating:"4.7 rating",
    learn: [
      "Design beautiful and functional user interfaces",
      "Master Figma and Adobe XD tools",
      "Understand UX research and user-centered design",
      "Create professional design portfolios",
    ],
     Requirements:[
      "A computer with Figma installed (free version)",
      "Basic understanding of design concepts helpful but not required",
      "Creative mindset and attention to detail",
    ],
    curriculum: [
      { title: "Design Fundamentals", time: "1h 20m" },
      { title: "Figma Mastery", time: "2h 10m" },
      { title: "UX Research Methods", time: "1h 50m" },
      { title: "UI Design Patterns", time: "2h 30m" },
      { title: "Portfolio Projects", time: "2h 30m" },
    ],
  },

  {
    id: 4,
    title: "React JS Complete Guide",
    description:
      "Learn React from scratch and build modern, scalable web applications using hooks and best practices.",
    image:
      "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
    duration: "18h 40m",
    price: "49.99",
    instructor: "John Doe",
     student:"15,200 students",
     rating:"4.8 rating",
    learn: [
      "Build reusable React components",
      "Understand hooks and state management",
      "Create SPA with React Router",
      "Optimize React performance",
    ],
     Requirements:[
      "Basic JavaScript knowledge",
      "Computer with internet access",
      "Willingness to learn",
    ],
    curriculum: [
      { title: "React Basics", time: "2h 10m" },
      { title: "Hooks Deep Dive", time: "3h 20m" },
      { title: "Routing & State", time: "3h 00m" },
      { title: "Advanced Patterns", time: "2h 30m" },
      { title: "Projects", time: "2h 40m" },
    ],
  },
  {
    id: 5,
    title: "Laravel From Scratch",
    description:
      "Master Laravel framework and build secure, scalable backend applications with MySQL.",
    image:
      "https://img-c.udemycdn.com/course/480x270/756150_c033_4.jpg",
    duration: "14h 15m",
    price: "39.99",
    instructor: "Sarah Smith",
     student:"11,200 students",
     rating:"4.6 rating",
    learn: [
      "Laravel MVC architecture",
      "Database migrations & Eloquent",
      "Authentication & authorization",
      "REST API development",
    ],
     Requirements:[
      "Basic PHP knowledge",
      "Local server environment",
      "MySQL basics",
    ],
    curriculum: [
      { title: "Laravel Basics", time: "1h 40m" },
      { title: "Database & ORM", time: "2h 20m" },
      { title: "Auth System", time: "1h 30m" },
      { title: "REST APIs", time: "2h 00m" },
      { title: "Final Project", time: "1h 50m" },
    ],
  },
  
  {
    id: 6,
    title: "React JS Complete Guide",
    description:
      "Learn React from scratch and build modern, scalable web applications using hooks and best practices.",
    image:
      "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
    duration: "18h 40m",
    price: "49.99",
    instructor: "John Doe",
     student:"15,200 students",
     rating:"4.8 rating",
    learn: [
      "Build reusable React components",
      "Understand hooks and state management",
      "Create SPA with React Router",
      "Optimize React performance",
    ],
     Requirements:[
      "Basic JavaScript knowledge",
      "Computer with internet access",
      "Willingness to learn",
    ],
    curriculum: [
      { title: "React Basics", time: "2h 10m" },
      { title: "Hooks Deep Dive", time: "3h 20m" },
      { title: "Routing & State", time: "3h 00m" },
      { title: "Advanced Patterns", time: "2h 30m" },
      { title: "Projects", time: "2h 40m" },
    ],
  },
  {
    id: 7,
    title: "JavaScript Advanced Concepts",
    description:
      "Deep dive into JavaScript internals including closures, async, and performance optimization.",
    image:
      "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
    duration: "16h 00m",
    price: "54.99",
    instructor: "Alex Brown",
     student:"20,400 students",
     rating:"4.9 rating",
    learn: [
      "Closures & scope",
      "Async & event loop",
      "Memory management",
      "Advanced patterns",
    ],
     Requirements:[
      "Strong JavaScript basics",
      "ES6 knowledge",
      "Programming experience",
    ],
    curriculum: [
      { title: "JS Internals", time: "2h 30m" },
      { title: "Async JS", time: "2h 10m" },
      { title: "Performance", time: "2h 00m" },
      { title: "Patterns", time: "1h 40m" },
      { title: "Real Projects", time: "2h 00m" },
    ],
  },
  {
    id: 8,
    title: "Flutter Mobile App Development",
    description:
      "Build beautiful cross-platform mobile apps using Flutter and Dart.",
    image:
      "https://img-c.udemycdn.com/course/480x270/1708340_7108_5.jpg",
    duration: "15h 30m",
    price: "42.99",
    instructor: "Emma Wilson",
     student:"8,900 students",
     rating:"4.5 rating",
    learn: [
      "Flutter widgets",
      "State management",
      "API integration",
      "Deploy mobile apps",
    ],
     Requirements:[
      "Basic programming knowledge",
      "Android Studio installed",
      "Laptop or PC",
    ],
    curriculum: [
      { title: "Flutter Basics", time: "2h 00m" },
      { title: "Layouts", time: "2h 20m" },
      { title: "State Management", time: "2h 10m" },
      { title: "API & Firebase", time: "2h 00m" },
      { title: "Final App", time: "2h 10m" },
    ],
  },
  {
    id: 9,
    title: "Node.js & Express API Development",
    description:
      "Create fast and scalable REST APIs using Node.js, Express, and MongoDB.",
    image:
      "https://img-c.udemycdn.com/course/480x270/1672410_9ff1_5.jpg",
    duration: "13h 45m",
    price: "47.99",
    instructor: "Daniel Lee",
     student:"13,400 students",
     rating:"4.6 rating",
    learn: [
      "Express framework",
      "REST API design",
      "JWT authentication",
      "MongoDB integration",
    ],
     Requirements:[
      "Command line familiarity",
      "Node.js basics",
      "JavaScript knowledge",
    ],
    curriculum: [
      { title: "Node Basics", time: "2h 20m" },
      { title: "Express APIs", time: "1h 50m" },
      { title: "Authentication", time: "2h 00m" },
      { title: "MongoDB", time: "1h 30m" },
      { title: "Deployment", time: "1h 30m" },
    ],
  },
  {
    id: 10,
    title: "Tailwind CSS From Zero to Hero",
    description:
      "Design modern, responsive websites faster using Tailwind CSS utility classes.",
    image:
      "https://img-c.udemycdn.com/course/480x270/4699780_b487_2.jpg",
    duration: "7h 50m",
    price: "29.99",
    instructor: "Kevin Tran",
     student:"7,600 students",
     rating:"4.7 rating",
    learn: [
      "Utility-first CSS",
      "Responsive layouts",
      "Dark mode design",
      "Custom components",
    ],
     Requirements:[
      "Basic HTML & CSS",
      "Code editor",
      "Browser",
    ],
    curriculum: [
      { title: "Tailwind Basics", time: "1h 20m" },
      { title: "Layouts", time: "1h 30m" },
      { title: "Components", time: "1h 40m" },
      { title: "Responsive Design", time: "1h 20m" },
      { title: "Project", time: "1h 00m" },
    ],
  },
 {
    id: 11,
    title: "Python for Data Science",
    description:
      "Master Python programming and data analysis with pandas, NumPy, and visualization libraries for data science projects.",
    image:
      "https://img-c.udemycdn.com/course/480x270/1754098_e0df_3.jpg",
    duration: "15h 45m",
     student:"12,500 students",
    price: "59.99",
    rating:"4.9",
    instructor: "Jane Smith",
     learn: [
      "Write Python code for data analysis and manipulation",
      "Use pandas and NumPy for efficient data processing",
      "Create data visualizations with Matplotlib and Seaborn",
      "Apply statistical methods to real-world datasets",
      
     
    ],
    Requirements:[
      "Basic computer skills",
      "Interest in data analysis and statistics",
      "No programming experience needed",
    ],
    curriculum: [
      { title: "Python Basics", time: "2h 10m" },
      { title: "Data Structures", time: "1h 50m" },
      { title: "Pandas & NumPy", time: "3h 15m" },
      { title: "Data Visualization", time: "2h 40m" },
      { title: "Real-World Projects", time: "2h 30m" },
    ],
  },
  {
    id: 12,
    title: "Docker & DevOps Essentials",
    description:
      "Learn Docker, containers, and DevOps fundamentals to deploy modern applications.",
    image:
      "https://img-c.udemycdn.com/course/480x270/3490000_d298_2.jpg",
    duration: "9h 40m",
    price: "45.99",
    instructor: "Chris Anderson",
     student:"6,200 students",
     rating:"4.5 rating",
    learn: [
      "Docker fundamentals",
      "Containerization",
      "CI/CD basics",
      "Deployment strategies",
    ],
     Requirements:[
      "Basic Linux knowledge",
      "Command line experience",
      "Programming basics",
    ],
    curriculum: [
      { title: "Docker Basics", time: " 1h 30m" },
      { title: "Images & Containers", time: "1h 40m" },
      { title: "Docker Compose", time: "1h 20m" },
      { title: "CI/CD", time: "1h 10m" },
      { title: "Deployment", time: "1h 00m" },
    ],
  },
  {
    id: 13,
    title: "Complete SQL & Database Bootcamp",
    description:
      "Learn SQL from scratch and manage relational databases efficiently.",
    image:
      "https://img-c.udemycdn.com/course/480x270/762616_7693_3.jpg",
    duration: "11h 25m",
    price: "37.99",
    instructor: "Linda Green",
     student:"14,300 students",
     rating:"4.7 rating",
    learn: [
      "SQL queries",
      "Joins & subqueries",
      "Database design",
      "Performance tuning",
    ],
     Requirements:[
      "No prior experience needed",
      "Computer access",
      "Interest in databases",
    ],
    curriculum: [
      { title: "SQL Basics", time: "1h 40m" },
      { title: "Joins", time: "1h 30m" },
      { title: "Advanced Queries", time: "1h 30m" },
      { title: "Indexes", time: "1h 10m" },
      { title: "Projects", time: "1h 20m" },
    ],
  },
    
];

export default courses;
