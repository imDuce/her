// import React, { useState } from "react";
// import "./navbar2.scss";

// const menuItems = [
//   { icon: "bx-home", title: "Home" },
//   { icon: "bx-receipt", title: "Receipt" },
//   { icon: "bx-plus-circle", title: "Add" },
//   { icon: "bx-bell", title: "Noti" },
//   { icon: "bx-user", title: "Account" },
// ];

// const Navbar = () => {
//   useEffect(() => {
//     //  extremely useful useEffect for loading external resources in a React component
//     const links = ["https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"];

//     const linkElements = links.map((href) => {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = href;
//       document.head.appendChild(link);
//       return link;
//     });

//     return () => {
//       // Cleanup: Remove the styles when component unmounts
//       linkElements.forEach((link) => document.head.removeChild(link));
//     };
//   }, []);

//   const [activeIndex, setActiveIndex] = useState(2);

//   return (
//     <div className="navbar-container">
//       <ul className="nav" style={{ listStyle: "none", padding: 0 }}>
//         <span
//           className="nav-indicator"
//           style={{ left: `calc(${activeIndex * 120 + 60}px - 45px)` }}
//         ></span>
//         {menuItems.map((item, index) => (
//           <li key={index} style={{ listStyle: "none" }}>
//             <a
//               href="#"
//               className={activeIndex === index ? "nav-item-active" : ""}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveIndex(index);
//               }}
//             >
//               <i className={`bx ${item.icon}`}></i>
//               <span className="title">{item.title}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur
//               in="SourceGraphic"
//               stdDeviation="10"
//               result="blur"
//             />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
//               result="goo"
//             />
//             <feBlend in="SourceGraphic" in2="goo" />
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default Navbar;







import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar2.scss";


const menuItems = [
  { icon: "bx-home", title: "Home", path: "/" },
  { icon: "bx-receipt", title: "Receipt", path: "/card" },
  { icon: "bx-plus-circle", title: "Add", path: "/video" },
  { icon: "bx-bell", title: "Noti", path: "/testing" },
  { icon: "bx-user", title: "Account", path: "/timeline" },
];

const Navbar2 = () => {
  const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
    //  extremely useful useEffect for loading external resources in a React component
    const links = ["https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"];

    const linkElements = links.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      // Cleanup: Remove the styles when component unmounts
      linkElements.forEach((link) => document.head.removeChild(link));
    };
  }, []);

  return (
    <div className="navbar-container">
      <ul className="nav" style={{ listStyle: "none", padding: 0 }}>
        <span
          className="nav-indicator"
          style={{ left: `calc(${activeIndex * 120 + 60}px - 45px)` }}
        ></span>
        {menuItems.map((item, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <Link
              to={item.path}
              className={activeIndex === index ? "nav-item-active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <i className={`bx ${item.icon}`}></i>
              <span className="title">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Navbar2;
