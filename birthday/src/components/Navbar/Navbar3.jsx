import { useState, useEffect, useRef } from "react";
import React from "react";
import "./navbar3.css";
import { Link } from "react-router-dom";

// const Menu = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const menuRef = useRef(null);
//   const menuBorderRef = useRef(null);

//   const menuItems = [
//     {
//       color: "#ff8c00",
//       icon: [
//         <path d="M3.8,6.6h16.4" />,
//         <path d="M20.2,12.1H3.8" />,
//         <path d="M3.8,17.5h16.4" />,
//       ],
//     },
//     {
//       color: "#f54888",
//       icon: [
//         <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8 C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />,
//         <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />,
//       ],
//     },
//     {
//       color: "#4343f5",
//       icon: [
//         <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />,
//         <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />,
//         <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />,
//       ],
//     },
//     {
//       color: "#e0b115",
//       icon: [
//         <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z" />,
//         <path d="M4.2,9.3h15.6" />,
//         <path d="M9.1,9.5v10.3" />,
//       ],
//     },
//     {
//       color: "#65ddb7",
//       icon: [
//         <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z" />,
//         <path d="M5.5,20l9.9-9.9l4.7,4.7" />,
//         <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />,
//       ],
//     },
//   ];

//   useEffect(() => {
//     offsetMenuBorder(menuItems[activeIndex]);
//   }, [activeIndex]);

//   const offsetMenuBorder = (element) => {
//     if (!menuRef.current || !menuBorderRef.current) return;
//     const offsetActiveItem =
//       menuRef.current.children[activeIndex].getBoundingClientRect();
//     const left =
//       Math.floor(
//         offsetActiveItem.left -
//           menuRef.current.offsetLeft -
//           (menuBorderRef.current.offsetWidth - offsetActiveItem.width) / 2
//       ) + "px";
//     menuBorderRef.current.style.transform = `translate3d(${left}, 0 , 0)`;
//   };

//   return (
//     <div className="menuDiv">
//       <menu className="menu" ref={menuRef}>
//         {menuItems.map((item, index) => (
//           <button
//             key={index}
//             className={`menu__item ${activeIndex === index ? "active" : ""}`}
//             style={{ "--bgColorItem": item.color }}
//             onClick={() => setActiveIndex(index)}
//           >
//             <svg className="icon" viewBox="0 0 24 24">
//               {item.icon}
//             </svg>
//           </button>
//         ))}
//         <div className="menu__border" ref={menuBorderRef}></div>
//       </menu>
//     </div>
//   );
// };

// export default Menu;

// const Menu = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const menuRef = useRef(null);
//     const menuBorderRef = useRef(null);

//     const menuItems = [
//       { path: "/home", icon: [<path d="M3.8,6.6h16.4" />, <path d="M20.2,12.1H3.8" />, <path d="M3.8,17.5h16.4" />] },
//       { path: "/add", icon: [<path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8 C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />, <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />] },
//       { path: "/about", icon: [<path d="M3.4,11.9l8.8,4.4l8.4-4.4" />, <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />, <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />] },
//       { path: "/test", icon: [<path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z" />, <path d="M4.2,9.3h15.6" />, <path d="M9.1,9.5v10.3" />] },
//       { path: "/xyz", icon: [<path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z" />, <path d="M5.5,20l9.9-9.9l4.7,4.7" />, <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />] }
//     ];

//     useEffect(() => {
//       offsetMenuBorder(menuItems[activeIndex]);
//     }, [activeIndex]);

//     const offsetMenuBorder = (element) => {
//       if (!menuRef.current || !menuBorderRef.current) return;
//       const offsetActiveItem = menuRef.current.children[activeIndex].getBoundingClientRect();
//       const left = Math.floor(offsetActiveItem.left - menuRef.current.offsetLeft - (menuBorderRef.current.offsetWidth - offsetActiveItem.width) / 2) + "px";
//       menuBorderRef.current.style.transform = `translate3d(${left}, 0 , 0)`;
//     };

//     return (
//       <menu className="menu" ref={menuRef}>
//         {menuItems.map((item, index) => (
//           <button
//             key={index}
//             className={`menu__item ${activeIndex === index ? "active" : ""}`}
//             onClick={() => setActiveIndex(index)}
//           >
//             <svg className="icon" viewBox="0 0 24 24">
//               {item.icon}
//             </svg>
//           </button>
//         ))}
//         <div className="menu__border" ref={menuBorderRef}></div>
//       </menu>
//     );
//   };

//   export default Menu;

const menuItems = [
  // {
  //   path: "/",
  //   color: "#ff8c00",
  //   icon: "M55.6,56.2C48.7,42.4,41.9,28.7,35,14.9c1.5-1,2.5-2.7,2.5-4.6c0-3.1-2.5-5.5-5.5-5.5c-3.1,0-5.5,2.5-5.5,5.5  c0,2.1,1.2,3.9,2.9,4.9c-7,13.7-14,27.4-21,41.1c-0.7,1.3,0.1,3,1.7,3c14.6,0,29.2-0.1,43.7-0.1C55.5,59.2,56.3,57.5,55.6,56.2z   M24.2,34.1l13.5-5.1c1,2,2,4,3,6l-20.6,7C21.4,39.5,22.8,36.8,24.2,34.1z M26.9,28.9c1.8-3.5,3.6-7.1,5.4-10.6  c1.2,2.4,2.4,4.8,3.6,7.2L26.9,28.9z M17.5,47.2l25-8.5c1,2,2,4,3,6l-32,10.6C14.8,52.6,16.1,49.9,17.5,47.2z M47.2,48.3  c1.1,2.3,2.3,4.6,3.4,6.9c-8.2,0-16.3,0-24.5,0L47.2,48.3z M32,8.7c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.6,1.4-1.4,1.5c-0.1,0-0.1,0-0.2,0  c-0.8,0-1.5-0.7-1.5-1.5C30.5,9.4,31.2,8.7,32,8.7z",
  // },
  {
    path: "/",
    color: "#ff8c00",
    icon: "M3.8,6.6h16.4 M20.2,12.1H3.8 M3.8,17.5h16.4",
  },
  {
    path: "/birthdayCard",
    color: "#e0b115",
    icon: "M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z M4.2,9.3h15.6 M9.1,9.5v10.3",
  },

  {
    path: "/video",
    color: "#4343f5",
    icon: "M3.4,11.9l8.8,4.4l8.4-4.4 M3.4,16.2l8.8,4.5l8.4-4.5 M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z",
  },
  {
    path: "/testing",
    color: "#e0b115",
    icon: "M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z M4.2,9.3h15.6 M9.1,9.5v10.3",
  },
  {
    path: "/timeline",
    color: "#65ddb7",
    icon: "M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1 C3.9,4.4,4.4,3.9,5.1,3.9z M5.5,20l9.9-9.9l4.7,4.7 M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3 C9.7,7.3,10.4,8,10.4,8.8z",
  },
];

const MenuBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const activeItem = menuRef.current.children[activeIndex];
    const menuBorder = borderRef.current;
    const left =
      Math.floor(
        activeItem.offsetLeft +
          (activeItem.offsetWidth - menuBorder.offsetWidth) / 2
      ) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  }, [activeIndex]);

  return (
    <div className="menuDiv">
      <menu className="menu" ref={menuRef}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`menu__item ${index === activeIndex ? "active" : ""}`}
            style={{ "--bgColorItem": item.color }}
            onClick={() => setActiveIndex(index)}
          >
            <svg className="icon" viewBox="0 0 24 24">
              <path d={item.icon} />
            </svg>
          </Link>
        ))}
        <div className="menu__border" ref={borderRef}></div>
      </menu>
    </div>
  );
};

export default MenuBar;
