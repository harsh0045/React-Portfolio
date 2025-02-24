// import React, { useState, useEffect } from "react";
// import "./sidebar.css";

// const Sidebar = () => {
  // const [toggle, showMenu] = useState(false);
 
//   return (
//     <>
//       <aside className={toggle ? "aside show-menu" : "aside"}>
//         <a href="#home" className="nav__logo">
//           <img src={dark ?  Sun : Moon} alt="" className="moon" onClick={darktheme} />
//         </a>

//         <nav className="nav">
//         <nav className="nav">
//           <div className="nav__menu">
//             <ul className="nav__list">
//               <li className="nav__item">
//                 <a href="#home" className="nav__link">
//                   <i className="icon-home"></i>
                   
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a href="#about" className="nav__link">
//                   <i className="icon-user-following"></i>
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a href="#services" className="nav__link">
//                   <i className="icon-briefcase"></i>
//                 </a>
//               </li>

//               <li className="nav__item">
//                 <a href="#resume" className="nav__link">
//                   <i className="icon-graduation"></i>
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a href="#portfolio" className="nav__link">
//                   <i className="icon-layers"></i>
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a href="#blog" className="nav__link">
//                   <i className="icon-note"></i>
//                 </a>
//               </li>
//               <li className="nav__item">
//                 <a href="#contact" className="nav__link">
//                   <i className="icon-bubble"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         </nav>
        
//         <div className="nav__footer">
//           <span className="copyright">&copy; 2024 All rights reserved</span>
//         </div>
//       </aside>

//       <div
//         className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
//         onClick={() => showMenu(!toggle)}
//       >
//         <i className="icon-menu"></i>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const sidebarData = [
  { id: "home", name: "Home", icon: "icon-home" },
  { id: "about", name: "About", icon: "icon-user" },
  {id:"skills",name: "Skills", icon: "icon-pencil"},
  
  {id:"experience",name:"Experience",icon: "icon-graduation"},
  { id: "services", name: "Services", icon: "icon-layers" },
  {id:"projects",name:"Projects",icon:"icon-briefcase"},
  { id: "contact", name: "Contact", icon: "icon-bubble" },

  
  
];

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [toggle, showMenu] = useState(false);
  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarData.map((item) =>
        document.getElementById(item.id)
      );

      let activeSection = "home"; // Default to "home"
      sections.forEach((section) => {
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          activeSection = section.id;
        }
      });

      setActive(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
  
      
    <aside className={toggle ? "aside show-menu" : "aside"}>
      {/* Brand Section */}
      <a href="/#home" className="sidebar-brand">
        <span className="brand-logo">H</span>
      </a>

      {/* Navigation Items */}
      <div className="sidebar-items">
        {sidebarData.map((item, i) => (
          <a
            href={`/#${item.id}`}
            key={i}
            className={`sidebar-item group ${
              active === item.id ? "active" : ""
            }`}
          >
            <span className="sidebar-icon"> <i className={item.icon}></i></span>
            <span className="sidebar-text">{item.name}</span>
          </a>
        ))}
      </div>

      {/* Footer Section */}
      <div className="sidebar-footer">
        <span className="footer-text">
          &copy; 2021 - {2024}
        </span>
      </div>
    </aside>
    
     <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
               onClick={() => showMenu(!toggle)}
           >
             <i className={ toggle? "icon-close " : "icon-menu"}></i>
          </div>
    </>
  );
};

export default Sidebar;
