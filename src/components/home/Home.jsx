import React from 'react'
import "./home.css";
import Me from "../../assets/avtar.png"
import HeaderSocials from './HeaderSocials';
import Scrolldown from './Scrolldown';
import Shapes from './Shapes';
import { Typewriter } from 'react-simple-typewriter'
import HeaderCoding from './HeaderCoding';
const Home = () => {
  
  return (
   <>
   <section className='home container' id='home'>
    <div className="intro">
      <img src={Me} alt="" className='home__img' />
      <h1 className='home__name'>Harsh Kesharwani</h1>
      <span className='home__education'><h1 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
        I'm {' '}
        <span style={{ color: 'hsl(353, 100%, 65%)', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['FullStack Developer', 'UI/UX DESIGNER','Competitive Programmer' ]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1> </span>
    
      <HeaderSocials/>
      <HeaderCoding/>

      <a href="#contact" className='btn btn-hire'>
        Hire Me
      </a>
      {/* <Scrolldown/> */}
    </div>
    <Shapes/>
   </section>
   </>
  )
}

export default Home