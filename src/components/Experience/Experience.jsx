import React from 'react';
import './Experience.css'; // Import the CSS file
import { useScroll,motion } from 'framer-motion';
import { useRef } from 'react';
const arrowLeftIcon = '➔'
const Experience = () => {
  const date= 2024;
  const experienceData = [
    { id: 1, title: '🎓Foundation Year ', education: 'B.Tech in Computer Science, KNIT', year: '2021', experience: ['Built a strong foundation in C, C++,Python and Data Structures & Algorithms (DSA).','Explored competitive programming and solved problems on Codechef & Geeksforgeeks.','Started learning basic development (HTML, CSS, JavaScript).'] },
    { id: 2, title: '🚀Exploration ', education: 'B.Tech in Computer Science, KNIT', year: '2022', experience: ['Learned MERN stack and started developing full-stack projects.','Gained experience in authentication (JWT), payment integration (Razorpay).','Explored backend development, learning about REST APIs, WebSockets, and databases.'] },
    { id: 3, title: '💻Intermediate Projcts', education: 'B.Tech in Computer Science, KNIT', year: '2023', experience: ['Enhanced knowledge of API routes, dynamic rendering and Frontend-Backend integration and build some intermediate projects.','Continued refining DSA skills and tackle higher rated problems.'] },
    { id: 4, title: '🎯Industry Ready ', education: 'B.Tech in Computer Science, KNIT', year: '2024', experience: ['Specialized in Next.js, adopting Zustand for state management and Prisma for efficient database operations.','Embraced TypeScript for type-safe development, enhancing code quality and scalability.',,'Dived into advanced competitive programming on Codeforces, tackling challenging problems and sharpening algorithmic skills.','Applying for software engineering roles, ready to enter the industry with strong problem-solving and full-stack development skills.'] },
  ];
   const containerRef=useRef(null);
   const {scrollYProgress}=useScroll({
       target:containerRef,
       offset: ['start 85%', 'end end'],
   })
  return (
    <section className="experience container section" id="experience">
            <h2 className="section__title">Experience & Education</h2>
      
          
        <div ref={containerRef} className="experience-content">
            {experienceData.map((data, i) => (
            <motion.div
                initial={{opacity:0,x:i%2 ===0? -80:80}}
                whileInView={{opacity:1,x:0}}
                key={`id-${i}`}
                className={`experience-card ${
                i % 2 === 0 ? 'experience-card-left' : 'experience-card-right'
                }`}
            >
                
                <div className="card-content">
                    <div style={{display:"flex", alignItems:"center" , columnGap:"8px"}}>
                      
                      <div className="card-title">{data.title}</div>
                      <img className="experience-img" src="/src/assets/looking-unscreen.gif" alt="" />
                     
                    </div>
                   
                    <p className="card-education">
                        <span className="label">Education:</span>
                        <span className="value">{data.education}</span>
                    </p>
                    <div className="card-experience">
                        <span className="label">Experience:</span>
                        <ul className="experience-list">
                            {data.experience.map((exp,j)=>(
                                <li key={j} className="experience-item">
                                    {exp}
                                </li>
                            ))}
                           
                        </ul>
                    </div>
                    <span
                        className={`arrow-icon ${i % 2 === 0 ? 'arrow-left' : 'arrow-right'}`}
                        >
                        {arrowLeftIcon}
                   </span>
                </div>
                <div className={`timeline-circle ${i%2 === 0 ? 'circle-left' :'circle-right'}`}>{date - experienceData.length + i + 1}</div>
               
            </motion.div>
            ))}
             <motion.div
              initial={{scaleY:0}}
              style={{scaleY:scrollYProgress}}
              className="timeline-line origin-top"></motion.div>
        </div>
      
    </section>
  );
};

export default Experience;

