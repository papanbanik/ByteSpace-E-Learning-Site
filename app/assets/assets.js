import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import card4 from "./card4.jpg";
import card5 from "./card5.jpg";
import card6 from "./card6.jpg";
import team2 from "./team2.png";
import team from "./team.png";
import person1 from "./person.png";
import person2 from "./person2.png";
import coilIcon from "./coil-icon.png";
import cone from "./Cone.png";
import whiteCoil from "./white-coil.png";
export const courseImages = [card1, card2, card3, card4, card5, card6];
export { person1, person2, coilIcon };
import sarah from "./sarah.png";
import james from "./james.png";
import alex from "./alex.png";
import logo from "./logo.png";
export { logo };
export { team };
export const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepeerl studio",
    image: courseImages[0],
    lessons: 17,
    duration: "2 hour 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Begineer",
    price: 25,
    students: [],
    extraStudents: 26,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepeerl studio",
    image: courseImages[1],
    lessons: 17,
    duration: "2 hour 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [],
    extraStudents: 26,
  },
  {
    id: 3,
    title: "The Power of Data Charts",
    author: "purepeerl studio",
    image: courseImages[2],
    lessons: 17,
    duration: "2 hour 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [],
    extraStudents: 26,
  },
  {
    id: 4,
    title: "Balancing Productivity and Focus",
    author: "purepeerl studio",
    image: courseImages[3],
    lessons: 17,
    duration: "2 hour 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [],
    extraStudents: 26,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "purepeerl studio",
    image: courseImages[4],
    lessons: 17,
    duration: "2 hour 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [],
    extraStudents: 26,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "purepeerl studio",
    image: courseImages[5],
    lessons: 17,
    duration: "2 hour 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
    students: [],
    extraStudents: 26,
  },
];
export const learningPaths = [
  {
    name: "Design",
    slug: "design",
    icon: [
      "M12 19l7-7 3 3-7 7-3-3z",
      "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",
      "M2 2l7.6 7.6",
      "M9 11a2 2 0 104 0 2 2 0 10-4 0",
    ],
  },
  {
    name: "Development",
    slug: "development",
    icon: ["M16 18l6-6-6-6", "M8 6l-6 6 6 6"],
  },
  {
    name: "IT & Software",
    slug: "it-software",
    icon: [
      "M5 4h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
      "M2 20h20",
    ],
  },
  {
    name: "Business",
    slug: "business",
    icon: [
      "M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z",
      "M9 22v-4h6v4",
      "M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01",
    ],
  },
  {
    name: "Marketing",
    slug: "marketing",
    icon: [
      "M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z",
      "M15.5 8.5a5 5 0 010 7",
      "M18.5 5.5a9 9 0 010 13",
    ],
  },
  {
    name: "Photography",
    slug: "photography",
    icon: [
      "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z",
      "M8 13a4 4 0 108 0 4 4 0 10-8 0",
    ],
  },
];
export const growthSection = {
  title: "Your Path to Professional Growth Starts Here!",
  text: "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ],
  featuredCourse: {
    title: "Learn Figma from Basic",
    author: "purepeerl studio",
    level: "Beginner",
    price: 25,
  },
  progress: { label: "Learning Progress", percent: 55 },
};

export const manageSection = {
  title: "Create & Manage Courses Easily.",
  intro:
    "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.",
  points: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
  revenue: {
    total: { label: "Total Revenue", range: "July 5-20", amount: "$120.29" },
    yearly: {
      label: "Year to Date",
      year: "2023",
      amount: "$1,200.38",
      change: "+8",
    },
  },
  students: { label: "Happy Students", rating: 4.8, reviews: 240 },
};
export const creatorCta = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  text: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  button: { label: "Join as Creator", href: "/creators" },
};

export const testimonialsSection = {
  title: "Discover What Our Community Is Saying",
  text: "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: sarah,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: james,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: alex,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerData = {
  newsletter: {
    text: "Stay Up to date with our latest features and releases by joining our newsletter.",
    placeholder: "Enter your email",
    button: "Search",
    note: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  },
  columns: [
    [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it-software" },
      { label: "Design", href: "/courses?category=design" },
    ],
    [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
    [
      { label: "Become a Creator", href: "/creators" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Settings", href: "/cookies" },
  ],
};

export { team2 };
export { whiteCoil };
export { cone };
