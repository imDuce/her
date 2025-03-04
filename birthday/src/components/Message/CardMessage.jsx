
import React, { useEffect } from "react";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import anime from "animejs";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./cardMsgS.scss";
import "./cardMsg.css";

// const CardMessage = () => {
//   useEffect(() => {
//     Splitting();
//     ScrollOut({
//       targets: "[data-splitting]",
//       onShown: (el) => {
//         if (!el.dataset.animated) {
//           el.dataset.animated = true;
//           anime.timeline({ loop: false })
//             .add({
//               targets: el.querySelectorAll(".letter"),
//               scale: {
//                 value: [0, 1],
//                 duration: 950,
//               },
//               translateY: [() => anime.random(-360, 360), 0],
//               translateX: [() => anime.random(-360, 0), 0],
//               opacity: [0, 1],
//               filter: {
//                 value: ["blur(15px)", "blur(0px)"],
//                 duration: 800,
//               },
//               duration: 750,
//               elasticity: 300,
//               delay: (el, i) => 35 * (i + 1),
//             });
//         }
//       },
//     });

//     document.querySelectorAll("p .letters").forEach((el) => {
//       el.innerHTML = el.textContent.replace(/([^ -\x80]|\w)/g, "<span class='letter' data-letter='$&'>$&</span>");
//     });
//   }, []);

//   return (
//     <div className="page">
//       <h1 className="ech1" data-splitting>ScrollOut + Splitting.js</h1>
//       <p className="peee" data-splitting>
//         <span className="text-wrapper">
//           <span className="letters">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
//         </span>
//       </p>
//       <h1 className="ech1" data-splitting>Triggering Splitting Animations on Scroll</h1>
//       <p className="peee" data-splitting>
//         <span className="text-wrapper">
//           <span className="letters">Vestibulum nunc massa, gravida quis porta nec...</span>
//         </span>
//       </p>
//       <h1 className="ech1" data-splitting>Add a <code>transition</code> to your splits (<code>.char</code> for example)</h1>
//       <p className="peee" data-splitting>
//         <span className="text-wrapper">
//           <span className="letters">Aliquam eu iaculis mauris. Etiam arcu lectus...</span>
//         </span>
//       </p>
//       <h1 className="ech1" data-splitting>Target <code>[data-scroll="out"]</code> for the default state</h1>
//       <p className="peee" data-splitting>
//         <span className="text-wrapper">
//           <span className="letters">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
//         </span>
//       </p>
//       <h1 className="ech1" data-splitting>That's about it!</h1>
//       <p className="peee" data-splitting>
//         <span className="text-wrapper">
//           <span className="letters">Donec nunc ligula, vulputate quis mollis eu...</span>
//         </span>
//       </p>
//       <h1 className="ech1" data-splitting>For real. It's easy!</h1>
//       <p className="peee" data-splitting>
//         <span className="text-wrapper">
//           <span className="letters">Vestibulum euismod vehicula sollicitudin...</span>
//         </span>
//       </p>
//     </div>
//   );
// };

// export default CardMessage;







const CardMessage = () => {
    useEffect(() => {

      const links = [
        "https://code.jquery.com/jquery-3.3.1.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js",
      ];
  
      const linkElements = links.map((href) => {
        const link = document.createElement("link");
        link.rel = "script";
        link.href = href;
        document.head.appendChild(link);
        return link;
      });
  



      setTimeout(() => {
        Splitting();
        ScrollOut({
          targets: "[data-splitting]",
          onShown: (el) => {
            if (!el.dataset.animated) {
              el.dataset.animated = true;
              anime.timeline({ loop: false }).add({
                targets: el.querySelectorAll(".letter"),
                scale: {
                  value: [0, 1],
                  duration: 950,
                },
                translateY: [() => anime.random(-360, 360), 0],
                translateX: [() => anime.random(-360, 0), 0],
                opacity: [0, 1],
                filter: {
                  value: ["blur(15px)", "blur(0px)"],
                  duration: 800,
                },
                duration: 750,
                elasticity: 300,
                delay: (el, i) => 35 * (i + 1),
              });
            }
          },
        });
  
        document.querySelectorAll("p .letters").forEach((el) => {
          el.innerHTML = el.textContent.replace(
            /([^\x00-\x80]|\w)/g,
            "<span class='letter' data-letter='$&'>$&</span>"
          );
        });
      }, 100); // Delay to ensure DOM updates before animations apply


      return () => {
        // Cleanup: Remove the styles when component unmounts
        linkElements.forEach((link) => document.head.removeChild(link));
      };
    }, []);
  
      return (
    <div className="page">
      <h1 className="ech1" data-splitting>ScrollOut + Splitting.js</h1>
      <p className="peee" data-splitting>
        <span className="text-wrapper">
          <span className="letters">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
        </span>
      </p>
      <h1 className="ech1" data-splitting>Triggering Splitting Animations on Scroll</h1>
      <p className="peee" data-splitting>
        <span className="text-wrapper">
          <span className="letters">Vestibulum nunc massa, gravida quis porta nec...</span>
        </span>
      </p>
      <h1 className="ech1" data-splitting>Add a <code>transition</code> to your splits (<code>.char</code> for example)</h1>
      <p className="peee" data-splitting>
        <span className="text-wrapper">
          <span className="letters">Aliquam eu iaculis mauris. Etiam arcu lectus...</span>
        </span>
      </p>
      <h1 className="ech1" data-splitting>Target <code>[data-scroll="out"]</code> for the default state</h1>
      <p className="peee" data-splitting>
        <span className="text-wrapper">
          <span className="letters">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</span>
        </span>
      </p>
      <h1 className="ech1" data-splitting>That's about it!</h1>
      <p className="peee" data-splitting>
        <span className="text-wrapper">
          <span className="letter">Donec nunc ligula, vulputate quis mollis eu...</span>
        </span>
      </p>
      <h1 className="ech1" data-splitting>For real. It's easy!</h1>
      <p className="peee" data-splitting>
        <span className="text-wrapper">
          <span className="letters">Vestibulum euismod vehicula sollicitudin...</span>
        </span>
      </p>
    </div>
  );
};  
  
  export default CardMessage;