import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Enhanced Cybersecurity for Modern Businesses",
    paragraph:
      "🔒 Protect your business with penetration testing, risk assessments, and multi-layered security solutions designed to prevent cyber threats.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Emilia Gette",
      image: "/images/blog/I  conduck.png",
      designation: "marketing associate",
    },
    tags: ["creative"],
    publishDate: "2020",
  },
  {
    id: 2,
    title: "Cloud Solutions for Businesses",
    paragraph:
      "☁️ Optimize performance, scalability, and security with advanced cloud migration, hybrid cloud, and backup strategies for modern enterprises.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Building a Robust IT Infrastructure for Growth",
    paragraph:
      "🖥 Ensure business continuity and efficiency with expert IT consulting, network design, and high-performance hardware solutions.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
