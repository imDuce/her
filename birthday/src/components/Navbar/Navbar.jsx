import React, { useState, useEffect, useRef } from "react";
import { Pane } from "https://cdn.skypack.dev/tweakpane@4.0.4";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [config, setConfig] = useState({
    speed: 0.35,
    backdrop: false,
    theme: "system",
  });
  const paneRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = config.theme;
    document.documentElement.dataset.backdrop = config.backdrop;
    document.documentElement.style.setProperty("--speed", config.speed);
  }, [config]);

  // useEffect(() => {
  //   const pane = new Pane({ title: "Config", expanded: true });
  //   paneRef.current = pane;

  //   pane
  //     .addBinding(config, "speed", {
  //       label: "Speed (s)",
  //       min: 0.2,
  //       max: 2,
  //       step: 0.01,
  //     })
  //     .on("change", (ev) => handleConfigChange("speed", ev.value));

  //   pane
  //     .addBinding(config, "backdrop", { label: "Backdrop" })
  //     .on("change", (ev) => handleConfigChange("backdrop", ev.value));

  //   pane
  //     .addBinding(config, "theme", {
  //       label: "Theme",
  //       options: {
  //         System: "system",
  //         Light: "light",
  //         Dark: "dark",
  //       },
  //     })
  //     .on("change", (ev) => handleConfigChange("theme", ev.value));

  //   return () => pane.dispose();
  // }, [config]);

  // const handleConfigChange = (key, value) => {
  //   setConfig((prev) => ({ ...prev, [key]: value }));
  // };

  const toggleTheme = () => {
    const options = ["system", "light", "dark"];
    const index = options.indexOf(config.theme);
    const newTheme = options[(index + 1) % options.length];
    setConfig((prev) => ({ ...prev, theme: newTheme }));
    if (paneRef.current) paneRef.current.refresh();
  };

  return (
    <>
      <div popover="auto" id="menu" className="outerDiv">
        <div className="content">
          <div className="content__content">
            <div className="links">
              <nav>
                <h3>Socials</h3>
                <ul>
                  <li>
                    <Link
                      to="https://x.com/intent/follow?screen_name=jh3yy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        fill="currentColor"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>X</title>
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                      <span>X</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://front-end.social/@jhey"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Mastodon</title>
                        <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
                      </svg>
                      <span>Mastodon</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://linkedin.com/in/jheytompkins"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        fill="currentColor"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>LinkedIn</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://instagram.com/jh3yyyy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                      </svg>
                      <span>Instagram</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <ul aria-hidden="true">
            {/* homepage */}
            <li style={{ "--i": 0 }}>
              <svg
                fill="#3a6d83"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
                strokeWidth="0.00064"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="party">
                    {" "}
                    <circle cx="52" cy="56" r="1"></circle>{" "}
                    <circle cx="21" cy="31" r="2"></circle>{" "}
                    <circle cx="35" cy="31" r="2"></circle>{" "}
                    <path d="M56,21a3,3,0,1,0-3-3A3.0033,3.0033,0,0,0,56,21Zm0-4a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,56,17Z"></path>{" "}
                    <path d="M6,10A1,1,0,0,0,7,9V8A1,1,0,0,0,5,8V9A1,1,0,0,0,6,10Z"></path>{" "}
                    <path d="M6,12a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V13A1,1,0,0,0,6,12Z"></path>{" "}
                    <path d="M5,11a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,11Z"></path>{" "}
                    <path d="M8,12H9a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"></path>{" "}
                    <path d="M56.5,32H55a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1.5a1.5,1.5,0,0,1,0,3H51.662a23.9612,23.9612,0,0,0-2.749-15.7751c.531-3.4526,1.4285-9.4314,2.9942-19.8811a.9994.9994,0,0,0-1.46-1.03C41.5692,9.0552,36.303,11.87,33.1655,13.5586A24.002,24.002,0,1,0,49.818,47H56.5a7.5,7.5,0,0,0,0-15ZM33.7189,15.538a46.1218,46.1218,0,0,0,6.245,5.1817A46.18,46.18,0,0,0,46.94,24.8662c-.2655,1.7394-.4753,3.0995-.5919,3.83-1.1338-.209-4.2471-1.5733-8.69-4.709s-6.7725-5.6094-7.3491-6.6074C30.9583,17.0249,32.1693,16.3713,33.7189,15.538Zm14.1639,3.1134a52.13,52.13,0,0,1-4.46-2.835,51.9914,51.9914,0,0,1-4.1647-3.2507c3.3377-1.7884,7.0749-3.7871,10.3761-5.5511C49.079,10.7163,48.4486,14.9072,47.8828,18.6514ZM56.5,45H29a1,1,0,0,0,0,2H47.5872A22.0055,22.0055,0,1,1,30.284,15.1207c-1.7181.9435-1.7729,1.016-1.8538,1.1313-.6724.9531-.0982,2.2363,1.92,4.291a46.8009,46.8009,0,0,0,6.1543,5.0791,46.7888,46.7888,0,0,0,6.8486,4.0957A8.6784,8.6784,0,0,0,46.67,30.7256a1.5471,1.5471,0,0,0,1.3692-.6358c.0705-.1.1173-.17.3278-1.4162A21.9652,21.9652,0,0,1,49.63,41H22.4141L20.707,39.293a1,1,0,0,0-1.414,1.414l2,2A1,1,0,0,0,22,43H56.5a3.5,3.5,0,0,0,0-7H56V34h.5a5.5,5.5,0,0,1,0,11Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </li>
            {/* bd msg */}
            <li style={{ "--i": 1 }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 18L10.29 20.29C10.514 20.5156 10.7804 20.6946 11.0739 20.8168C11.3674 20.9389 11.6821 21.0018 12 21.0018C12.3179 21.0018 12.6326 20.9389 12.9261 20.8168C13.2196 20.6946 13.486 20.5156 13.71 20.29L16 18H18C19.0609 18 20.0783 17.5786 20.8284 16.8285C21.5786 16.0783 22 15.0609 22 14V7C22 5.93913 21.5786 4.92178 20.8284 4.17163C20.0783 3.42149 19.0609 3 18 3H6C4.93913 3 3.92172 3.42149 3.17157 4.17163C2.42142 4.92178 2 5.93913 2 7V14C2 15.0609 2.42142 16.0783 3.17157 16.8285C3.92172 17.5786 4.93913 18 6 18H8Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M17 9H7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M13 12H7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </li>
            {/* timeline */}
            <li style={{ "--i": 2 }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clipPath="url(#clip0_429_11075)">
                    {" "}
                    <path
                      d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999"
                      stroke="#3a6d83"
                      strokeWidth="1.344"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M1 11.9999L3 13.9999L5 11.9999"
                      stroke="#3a6d83"
                      strokeWidth="1.344"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M11 7.99994L11 12.9999L16 12.9999"
                      stroke="#3a6d83"
                      strokeWidth="1.344"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_429_11075">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </li>
            {/* video  */}
            <li style={{ "--i": 3 }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                </g>
              </svg>
            </li>

            {/* testing tab */}
            <li style={{ "--i": 4 }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                </g>
              </svg>
            </li>

            {/* toogler */}
            <li style={{ "--i ": 5 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a6d83"
                className="theme-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </li>

            {/* menubar */}
            <li style={{ "--i": 6 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a6d83"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <nav className="nav">
        <ul>
          {/* homepage */}
          <li>
            <Link to="/">
              <svg
                fill="#3a6d83"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
                strokeWidth="0.00064"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="party">
                    {" "}
                    <circle cx="52" cy="56" r="1"></circle>{" "}
                    <circle cx="21" cy="31" r="2"></circle>{" "}
                    <circle cx="35" cy="31" r="2"></circle>{" "}
                    <path d="M56,21a3,3,0,1,0-3-3A3.0033,3.0033,0,0,0,56,21Zm0-4a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,56,17Z"></path>{" "}
                    <path d="M6,10A1,1,0,0,0,7,9V8A1,1,0,0,0,5,8V9A1,1,0,0,0,6,10Z"></path>{" "}
                    <path d="M6,12a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V13A1,1,0,0,0,6,12Z"></path>{" "}
                    <path d="M5,11a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,11Z"></path>{" "}
                    <path d="M8,12H9a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"></path>{" "}
                    <path d="M56.5,32H55a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1.5a1.5,1.5,0,0,1,0,3H51.662a23.9612,23.9612,0,0,0-2.749-15.7751c.531-3.4526,1.4285-9.4314,2.9942-19.8811a.9994.9994,0,0,0-1.46-1.03C41.5692,9.0552,36.303,11.87,33.1655,13.5586A24.002,24.002,0,1,0,49.818,47H56.5a7.5,7.5,0,0,0,0-15ZM33.7189,15.538a46.1218,46.1218,0,0,0,6.245,5.1817A46.18,46.18,0,0,0,46.94,24.8662c-.2655,1.7394-.4753,3.0995-.5919,3.83-1.1338-.209-4.2471-1.5733-8.69-4.709s-6.7725-5.6094-7.3491-6.6074C30.9583,17.0249,32.1693,16.3713,33.7189,15.538Zm14.1639,3.1134a52.13,52.13,0,0,1-4.46-2.835,51.9914,51.9914,0,0,1-4.1647-3.2507c3.3377-1.7884,7.0749-3.7871,10.3761-5.5511C49.079,10.7163,48.4486,14.9072,47.8828,18.6514ZM56.5,45H29a1,1,0,0,0,0,2H47.5872A22.0055,22.0055,0,1,1,30.284,15.1207c-1.7181.9435-1.7729,1.016-1.8538,1.1313-.6724.9531-.0982,2.2363,1.92,4.291a46.8009,46.8009,0,0,0,6.1543,5.0791,46.7888,46.7888,0,0,0,6.8486,4.0957A8.6784,8.6784,0,0,0,46.67,30.7256a1.5471,1.5471,0,0,0,1.3692-.6358c.0705-.1.1173-.17.3278-1.4162A21.9652,21.9652,0,0,1,49.63,41H22.4141L20.707,39.293a1,1,0,0,0-1.414,1.414l2,2A1,1,0,0,0,22,43H56.5a3.5,3.5,0,0,0,0-7H56V34h.5a5.5,5.5,0,0,1,0,11Z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </Link>
          </li>
          {/* bd msg */}
          <li>
            <Link to="/card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 18L10.29 20.29C10.514 20.5156 10.7804 20.6946 11.0739 20.8168C11.3674 20.9389 11.6821 21.0018 12 21.0018C12.3179 21.0018 12.6326 20.9389 12.9261 20.8168C13.2196 20.6946 13.486 20.5156 13.71 20.29L16 18H18C19.0609 18 20.0783 17.5786 20.8284 16.8285C21.5786 16.0783 22 15.0609 22 14V7C22 5.93913 21.5786 4.92178 20.8284 4.17163C20.0783 3.42149 19.0609 3 18 3H6C4.93913 3 3.92172 3.42149 3.17157 4.17163C2.42142 4.92178 2 5.93913 2 7V14C2 15.0609 2.42142 16.0783 3.17157 16.8285C3.92172 17.5786 4.93913 18 6 18H8Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M17 9H7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M13 12H7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </li>
          {/* timeline */}
          <li>
            <Link to="/timeline">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clipPath="url(#clip0_429_11075)">
                    {" "}
                    <path
                      d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999"
                      stroke="#3a6d83"
                      strokeWidth="1.344"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M1 11.9999L3 13.9999L5 11.9999"
                      stroke="#3a6d83"
                      strokeWidth="1.344"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M11 7.99994L11 12.9999L16 12.9999"
                      stroke="#3a6d83"
                      strokeWidth="1.344"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_429_11075">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </Link>
          </li>
          {/* video */}
          <li>
            <Link to="/video">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </li>

          {/* testing tab */}
          <li>
            <Link to="/testing">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3a6d83"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M14.5812 13.6159C15.1396 13.9621 15.1396 14.8582 14.5812 15.2044L11.2096 17.2945C10.6669 17.6309 10 17.1931 10 16.5003L10 12.32C10 11.6273 10.6669 11.1894 11.2096 11.5258L14.5812 13.6159Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                  <path
                    d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
                    stroke="#3a6d83"
                    strokeWidth="1.08"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </li>

          {/* toogler */}
          <li>
            <button className="theme-toggler" onClick={toggleTheme}>
              <span className="sr-only">Toggle Theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a6d83"
                className="theme-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
                {/* moon */}
                <path
                  d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                  stroke="#3a6d83"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          {/* menubar */}
          <li>
            <button popovertarget="menu" popovertargetaction="toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#3a6d83"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
