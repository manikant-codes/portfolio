import React from "react";
import AboutRow from "../components/home/aboutRow/AboutRow";
import Hero from "../components/home/Hero";
import { useOutletContext } from "react-router-dom";
import ResumeRow from "../components/home/resumeRow/ResumeRow";

function Home(props) {
  const { navbar } = useOutletContext();

  return (
    <div>
      <Hero
        image="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Manikant Jha"
        subtitle="Full-Stack Developer"
      />
      {navbar}
      <AboutRow />
      <ResumeRow />
    </div>
  );
}

export default Home;
