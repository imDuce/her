// import React, { useState, useEffect } from 'react';
// import './stylingForUtils.css';

// function TextAnim3() {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   const dataText = [
//     'Utrecht.',
//     'Full Service.',
//     'Webdevelopment.',
//     'Wij zijn Codefield!',
//   ];

//   useEffect(() => {
//     const handleTyping = () => {
//       const i = loopNum % dataText.length;
//       const fullText = dataText[i];

//       setText(
//         isDeleting
//           ? fullText.substring(0, text.length - 1)
//           : fullText.substring(0, text.length + 1)
//       );

//       setTypingSpeed(isDeleting ? 50 : 100);

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => setIsDeleting(true), 700);
//       } else if (isDeleting && text === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, isDeleting, loopNum, typingSpeed, dataText]);

//   return (
//     <div className="anim3">
//       <h1 className='anim3H1'>
//         {text}
//         <span aria-hidden="true" className='anim3Span'></span>
//       </h1>
//     </div>
//   );
// }

// export default TextAnim3;

import React, { useState, useEffect } from "react";
import "./stylingForUtils.css";

function TextAnim3( ) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isComplete, setIsComplete] = useState(false);

    const dataText = [
      "This section was not supposed to be there, but the recipient kinda deserves it for making the developer's life harder.",
      "SO here goes .....",
      " 1. Pictures were not provided as and when asked for, which led to delay in development as well as hindered the quality (missing teenage images !)",
      " 2. The developer was not treated well at times, his only fault was that he wanted to celebrate the day, a day, which he has been waiting for a very long time.",
      " 3. The developer is always misunderstood, no matter what he does !",
      // " 3. The developer is always misunderstood, no matter what he does, he is always wrong and his suggessions and inputs have negligible significance.",
      // " 3. There were a lot of things planned for the day which could have been executed if the reciepient had shown up. ",
      // " 3. Someone needs to learn that not everything is about them and their happiness so if doing something for them makes others happy, they should let them do it.",
      " 4. Promises made by the recipient are almost never kept !!!!!!",
      " These are not supposed to be personal attack on the recipient, rather just a short synopsis of how the developer felt !",
      " DO NOT make it personal",
      " Thanks for reading !",
    ];
//   const dataText = [input];

  useEffect(() => {
    if (isComplete) return;

    const handleTyping = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 20 : 100);

      if (!isDeleting && text === fullText) {
        // Check if this is the last text in the array
        if (i === dataText.length - 1) {
          setIsComplete(true);
          return;
        }

        setTimeout(() => setIsDeleting(true), 700);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, dataText, isComplete]);

  return (
    <div className="anim3">
      <h1 className="anim3H1">
        {text}
        {!isComplete && <span aria-hidden="true" className="anim3Span"></span>}
      </h1>
    </div>
  );
}

export default TextAnim3;
