
import React, { useEffect, useState } from "react";

import "./Toggle.css";


import Moon from "/assets/Moon.svg"
import Sun from "/assets/Sun.svg";
const Toggle = ({ children }) => {
  
   const [dark, setDark] = useState(false); // Use boolean for dark mode
 
   const darktheme = () => {
     setDark(!dark);
   };
 
   useEffect(() => {
     document.body.className = dark ?  "dark-theme" : "light-theme";
   }, [dark]);

  return (
      <div className="toggle-container">
        <div className="dl_dec">
            <a href="#home" className=" dl_pos " >
              <img onClick={darktheme} src={dark ?  Sun : Moon} alt="" className="moon "  />
            </a>
        </div>
        
        {children}
      </div>
  
  );
};

export default Toggle;
