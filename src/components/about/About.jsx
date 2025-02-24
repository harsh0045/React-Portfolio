
import React, { useEffect, useState } from "react";
import "./about.css";
import { motion } from "framer-motion";

const About = () => {
  
  const aboutData = [
    {
      id: 1,
      title: "Codeforces-Ratings",
      path: "https://codeforces.com/profile/harshu_45",
      amount: 1203,
      src:"/assets/cp2.png",
      h:"25",
      w:"25",

    },
    {
      id: 2,
      title: "LeetCode-Ratings",
      path: "https://leetcode.com/harsh_45", // Use emoji, icon class, or an SVG/React component
      amount: 1703 ,
      src:"/assets/leetcode.png",
      h:"30",
      w:"30",
    },
    {
      id: 3,
      title: "Published-Article",
      path: "https://www.geeksforgeeks.org/user/harsh_45/" ,
      amount: 11,
      src:"/assets/gfg2.svg" ,
      h:"30",
      w:"30",
    },
   
    {
      id: 4,
      title: "Successful-Projects",
      path: "https://github.com/harsh0045", // Use emoji, icon class, or an SVG/React component
      amount: 12,
      src:"/assets/github.png",
      h:"50",
      w:"50",
    },
  ];

  const Counter = ({ amount }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
  
    useEffect(() => {
      if (!isInViewport) return;
  
      const duration = 2000; // total animation time in ms
      const frames = 60; // number of updates (roughly 60 fps)
      const increment = amount / frames;
      let currentFrame = 0;
  
      const intervalId = setInterval(() => {
        currentFrame++;
        const newValue = Math.floor(increment * currentFrame);
        if (newValue >= amount) {
          setCurrentValue(amount);
          clearInterval(intervalId);
        } else {
          setCurrentValue(newValue);
        }
      }, duration / frames);
  
      return () => clearInterval(intervalId);
    }, [isInViewport, amount]);
  
    return (
      <motion.span
        className="amount"
        whileInView={() => setIsInViewport(true)}
        onViewportLeave={() => setIsInViewport(false)}
        viewport={{ once: false }}
      >
        {currentValue}
      </motion.span>
    );
  };
  

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="grid-container">
        <div className="item1">
          <img src="/assets/about-me.png" className="about-img" />
        </div>
        <div className="item2 about__data">
          <p className="about__description">
            Greetings!
            <br />
            I'm Harsh, a Fullstack developer passionate about building modern, high-performing web applications. I specialize in React.js, Next.js, Tailwind CSS, TypeScript, Prisma, and SQL, creating sleek and user-friendly interfaces. I use MongoDB & PostgreSQL for robust database management, Zustand for smooth state handling, and Figma for designing intuitive UI/UX. For hassle-free deployment, I rely on Vercel, ensuring speed and scalability. Always eager to learn and improve, I strive to craft seamless digital experiences.
          </p>
          <a
            href="/harshresume.pdf"
            download="harshresume.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="item3">
          {aboutData.map((item) => (
            <div key={item.id} className="block_achievements">
              {/* Icon */}
              <span className="icon">
              <a href={item.path} className="coding-img" target='_blank'>
                 <img src={item.src} height={item.h} width={item.w} alt="" /> 
             </a> 
              </span>

              {/* Content */}
              <Counter amount={item.amount} />
              <span className="title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
