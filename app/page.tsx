import React from "react";
import Hero from "@/components/home/Hero";
import Brand from "@/components/home/Brand";
import Courses from "@/components/home/Courses";
import LearningPaths from "@/components/home/LearningPath";
import Showcase from "@/components/home/ShowCase";
import CreatorCta from "@/components/home/Creatorcta";
import Testimonials from "@/components/home/Testimonial";
import Footer from "@/components/layout/Footer";
const Home = () => {
  return (
    <main>
      <Hero />
      <Brand />
      <Courses />
      <LearningPaths />
      <Showcase />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
};
export default Home;
