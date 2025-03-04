import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar4.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(); // Default active is 3rd item (index 2)
  const navigate = useNavigate();

  const menuItems = [
    // { icon: "dashboard", path: "/" },
    { icon: "cake", path: "/" },
    // { icon: "chat_bubble_outline", path: "/birthdayCard" },
    { icon: "drafts", path: "/birthdayCard" },
    // { icon: "drafts", path: "/birthdayCard" },
    { icon: "view_carousel ", path: "/video" },
    // { icon: "home", path: "/video" },
    { icon: "web_stories", path: "/testing" },
    // { icon: "favorite_border", path: "/testing" },
    { icon: "info", path: "/egg" },
    { icon: "celebration", path: "/card" },
  ];

  const handleItemClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  useEffect(() => {
    //  extremely useful useEffect for loading external resources in a React component
    const links = ["https://fonts.googleapis.com/icon?family=Material+Icons"];

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
    <div className="outer-flex-container">
      <div className="flex-container">
        <nav className="navigator">
          <div
            className="selector"
            style={{ left: `${activeIndex * 50}px` }}
          ></div>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                data-list={index + 1}
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleItemClick(index, item.path)}
              >
                <span className="material-icons">{item.icon}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="outer-flex-container ">
        <div className="footer-copyright">
          {/* <a href="/ourMemories" target="_blank" rel="noopener noreferrer">
            <span className="material-icons">group</span>
          </a>
          <a
            className="footer_link2"
            href="https://github.com/imDuce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-icons">code</span>
          </a>
          <a
            className="footer_link2"
            href="/complain"
            target="_blank"
            rel="noopener noreferrer"
          > */}


<Link to="/ourMemories" target="_blank" rel="noopener noreferrer">
            <span className="material-icons">group</span>
          </Link>
          <Link
            className="footer_link2"
            to="https://github.com/imDuce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-icons">code</span>
          </Link>
          <Link
            className="footer_link2"
            to="/complain"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="material-icons">error</span>
            </Link>
          {/* </a> */}
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
