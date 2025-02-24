import { useState } from 'preact/hooks';
import { Helmet } from 'react-helmet';
import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

import Services from './components/services/Services';
import Contact from './components/contact/Contact';


import Skills from './components/skills/Skills';
import Experience from './components/Experience/Experience';
import Toggle from './components/Toggle/toggle';

export function App() {
  return (
    <>
      <Helmet>
        <title>Harsh - Web Development Portfolio</title>
        <meta name="description" content="I am a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects." />
        <meta name="keywords" content="Harsh, web development, MERN stack, portfolio, projects, React, Node.js, MongoDB, Express" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Harsh Kesharwani",
              "url": "https://harsh.in",
              "sameAs": [
                "https://www.linkedin.com/in/harshdotcom/",
                "https://github.com/harshdotcom",
                 "https://blog.harsh.in"
              ],
              "jobTitle": "Fullstack Developer",
              "description": "Harsh is a MERN stack developer dedicated to creating impactful web applications. Explore my portfolio and projects."
            }
          `}
        </script>
      </Helmet>
      <Toggle>
        <Sidebar />

        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Services />

          <Portfolio />

          <Contact />
        </main>
      </Toggle>
    </>
  );
}
