export interface Project {
  title: string;
  desc: string;
  tech: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  dark: boolean;
}

export const projects: Project[] = [
  {
    title: "SmartPark",
    desc: "A smart parking management system built with Django, Firebase and MongoDB, with real-time parking space monitoring using a computer vision model (CVzone) for automated detection. Won 1st place at Impetus Innovative Project, scoring 481/500 and securing funding.",
    tech: ["Django", "Firebase", "MongoDB", "CVzone"],
    image: "/projects/smartpark.png",
    githubUrl: "https://github.com/mathaisjustin/smartPark",
    liveUrl: "#",
    docsUrl: "#",
    dark: false,
  },
  {
    title: "Jewels Store",
    desc: "A full-fledged jewelry eCommerce website built with PHP, MySQL, HTML, CSS and JavaScript. Implemented product search, filtering, cart, and secure payments with Razorpay, plus an admin panel for product, order and user management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Razorpay"],
    image: "/projects/jdm.png",
    githubUrl: "https://github.com/mathaisjustin/Jewels-Store",
    liveUrl: "#",
    docsUrl: "#",
    dark: true,
  },
  {
    title: "Youace Website",
    desc: "Designed and developed a responsive, user-centric landing page for a personal development platform, emphasizing accessibility and seamless user experience with contemporary front-end design principles.",
    tech: ["Next.js", "Responsive Design"],
    image: "/projects/youace.png",
    githubUrl: "https://github.com/mathaisjustin/Youace-landing",
    liveUrl: "#",
    docsUrl: "#",
    dark: false,
  },
  {
    title: "Personal Homelab Infrastructure",
    desc: "Designed and deployed a homelab environment with multiple virtual machines, Docker containers, and Kubernetes orchestration. Implemented network management, firewall rules, and automated backups for development, testing, and CI.",
    tech: ["Docker", "Kubernetes", "Virtual Machines", "Networking"],
    githubUrl: "https://github.com/mathaisjustin",
    liveUrl: "#",
    docsUrl: "#",
    dark: false,
  },
  {
    title: "Personal Portfolio Website",
    desc: "Built a responsive personal portfolio using Next.js and Tailwind CSS to showcase projects and work experience, deployed and optimized for performance and SEO best practices.",
    tech: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/mathaisjustin",
    liveUrl: "#",
    docsUrl: "#",
    dark: false,
  },
];
