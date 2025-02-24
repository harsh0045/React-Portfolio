import React from 'react'
import "./Skills.css"
import { motion } from 'framer-motion'
const Skills = () => {
    const skillsData = [
        {
            name: "Ai",
            icon: '/assets/skills/ai.png'
        },
        {
            name: "HTML",
            icon: '/assets/skills/html.png'
        },
        {
            name: "CSS",
            icon: '/assets/skills/css.png'
        },
        {
            name: "Tailwind",
            icon: '/assets/skills/tailwind.png'
        },
        {
            name: "Javascript",
            icon: '/assets/skills/js.png'
        },
        {
            name: "Figma",
            icon: '/assets/skills/figma.png'
        },
        {
            name: "React",
            icon: '/assets/skills/react.png'
        },
        {
            name: "Vite",
            icon: '/assets/skills/vite.png'
        },
        {
            name: "Nodejs",
            icon: '/assets/skills/nodejs.png'
        },
        {
            name: "MongoDB",
            icon: '/assets/skills/mongodb.png'
        },
        {
            name: "Nextjs",
            icon: '/assets/skills/next.png'
        },
        {
            name: "Prisma",
            icon: '/assets/skills/prisma.png'
        },
        {
            name: "Postgres",
            icon: '/assets/skills/postgres.png'
        },

        {
            name: "Github",
            icon: '/assets/skills/github.png'
        },
        {
            name: "VSCode",
            icon: '/assets/skills/vscode.png'
        },
        {
            name: "Postman",
            icon: '/assets/skills/postman.png'
        }
    ]
    const variants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.07,
            },
        }),
        hidden: {
            opacity: 0,
            y: 30,
        },
    }
    return (
        <section className="Skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

                <div className="skills-container">
                    {skillsData.map((item, i) => (
                        <motion.div
                            custom={i}
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.1 }}
                            viewport={{ margin: '50px', once: false }}
                            key={i}
                            className="skill-item"
                        >
                            <img
                                src={item.icon}
                                alt="Skills Image"
                                className="skill-image"
                            />
                            <p className="skill-text">
                                {item.name} {/* Display the skill text */}
                            </p>
                        </motion.div>
                    ))}
                </div>
           

        </section>

    )
}

export default Skills