// import React, { useEffect, useRef, useState } from 'react';
// import './stylingForUtils.css';

// class TextScrambleEffect {
//   constructor(el) {
//     this.el = el;
//     this.chars = '!<>-_\\/[]{}—=+*^?#________';
//     this.update = this.update.bind(this);
//   }

//   setText(newText) {
//     const oldText = this.el.innerText;
//     const length = Math.max(oldText.length, newText.length);
//     const promise = new Promise((resolve) => (this.resolve = resolve));
//     this.queue = [];

//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || '';
//       const to = newText[i] || '';
//       const start = Math.floor(Math.random() * 40);
//       const end = start + Math.floor(Math.random() * 40);
//       this.queue.push({ from, to, start, end });
//     }

//     cancelAnimationFrame(this.frameRequest);
//     this.frame = 0;
//     this.update();
//     return promise;
//   }

//   update() {
//     let output = '';
//     let complete = 0;

//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i];
//       if (this.frame >= end) {
//         complete++;
//         output += to;
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar();
//           this.queue[i].char = char;
//         }
//         output += `<span class="dud">${char}</span>`;
//       } else {
//         output += from;
//       }
//     }

//     this.el.innerHTML = output;

//     if (complete === this.queue.length) {
//       this.resolve();
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update);
//       this.frame++;
//     }
//   }

//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)];
//   }
// }

// const TextScramble = ({ phrases = [] }) => {
//   const textRef = useRef(null);
//   const fxRef = useRef(null);
//   const counterRef = useRef(0);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     if (textRef.current && phrases.length > 0 && !isInitialized) {
//       fxRef.current = new TextScrambleEffect(textRef.current);
//       setIsInitialized(true);
//     }
//   }, [phrases, isInitialized]);

//   useEffect(() => {
//     if (!isInitialized) return;

//     const next = () => {
//       if (fxRef.current) {
//         fxRef.current.setText(phrases[counterRef.current]).then(() => {
//           setTimeout(next, 800);
//         });
//         counterRef.current = (counterRef.current + 1) % phrases.length;
//       }
//     };

//     next();

//     return () => {
//       if (fxRef.current && fxRef.current.frameRequest) {
//         cancelAnimationFrame(fxRef.current.frameRequest);
//       }
//     };
//   }, [phrases, isInitialized]);

//   return (
//     <div className="animContainer">
//       <div className="animText" ref={textRef}></div>
//     </div>
//   );
// };

// // Example usage
// const TestAnimation6 = () => {
//   const phrases = [
//     'Hey,',
//     'put here all the sentences',
//     'that you want to cycle',
//     'they will all be automatically displayed.',
//     'Just',
//     'Like',
//     'This.',
//     'Have fun :)',
//   ];

//   return (
//     <div className="animApp">
//       <TextScramble phrases={phrases} />
//     </div>
//   );
// };

// export default TestAnimation6;




import React, { useEffect, useRef, useState } from 'react';
import './stylingForUtils.css';

class TextScrambleEffect {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.4) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScramble = ({ phrases = [] }) => {
  const textRef = useRef(null);
  const fxRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (textRef.current && phrases.length > 0 && !isInitialized) {
      fxRef.current = new TextScrambleEffect(textRef.current);
      setIsInitialized(true);
    }
  }, [phrases, isInitialized]);

  useEffect(() => {
    if (!isInitialized || phrases.length === 0) return;
    
    let currentIndex = 0;
    
    const playNextPhrase = () => {
      if (fxRef.current) {
        fxRef.current.setText(phrases[currentIndex]).then(() => {
          currentIndex++;
          if (currentIndex < phrases.length) {
            setTimeout(playNextPhrase, 1900);
          }
        });
      }
    };
    
    playNextPhrase();

    return () => {
      if (fxRef.current && fxRef.current.frameRequest) {
        cancelAnimationFrame(fxRef.current.frameRequest);
      }
    };
  }, [phrases, isInitialized]);

  return (
    <div className="animContainer">
      <div className="animText" ref={textRef}></div>
    </div>
  );
};

// Example usage
const TestAnimation6 = () => {
  const phrases = [
    'Like a wheel in constant motion,',
    "You've pedaled through a quarter century",
    'With the wind of ambition at your back',
    'And adventure woven into your spirit.',
    'Hands that create beauty from simple threads,',
    'Crocheting moments into memories,',
    'crafting your path forward — ',
    'Thread by thread, dream by dream, victory unfolds.',
    'On the field of life, playing with passion,',
    'chasing goals with unwavering determination,',
    'building a treasury of experiences, ',
    'more valuable than any currency.',
    'words of wisdom....',
    "... by Your's Truly"
  ];



 

  return (
    <div className="animApp">
      <TextScramble phrases={phrases} />
    </div>
  );
};

export default TestAnimation6;