import React, { useEffect } from 'react';
import gsap from 'gsap';
import './scroller.css'; 

const ScrollingText = () => {
  useEffect(() => {
    gsap.defaults({ duration: 1 });
    const tl = gsap.timeline({ paused: true });
    const lines = gsap.utils.toArray('ul li');
    gsap.set('ul li', { yPercent: 300 });
    const paddedLines = [...lines, ...lines, ...lines];

    paddedLines.forEach((line, index) => {
      const lineTl = gsap.timeline().set(line, { yPercent: 300 }).to(
        line,
        {
          yPercent: '-=600',
          repeatRefresh: true,
          immediateRender: false,
          ease: 'none',
          duration: 6,
        },
        0
      );
      tl.add(lineTl, index);
    });

    const scrubber = gsap.timeline({ paused: true }).fromTo(
      tl,
      { totalTime: lines.length + 1 },
      {
        totalTime: lines.length * 2 + 1,
        ease: 'none',
        duration: lines.length,
        repeat: -1,
      }
    );
    gsap.set(scrubber, { totalTime: lines.length + 2 });

    let index = 0;
    gsap.set('.indicator', {
      '--width': lines[index].getBoundingClientRect().width,
    });

    const syncIndicator = () => {
      index += 1;
      gsap.set('.indicator', {
        '--width': lines[index % lines.length].getBoundingClientRect().width,
        '--h': gsap.utils.random(0, 359),
      });
    };

    gsap.to(scrubber, {
      delay: 1,
      totalTime: '+=1',
      duration: 1,
      repeat: -1,
      repeatDelay: 1,
      repeatRefresh: true,
      onStart: syncIndicator,
      onRepeat: syncIndicator,
      ease: 'elastic.out(1, 0.875)',
    });

    gsap.set('.scrollContainer', { opacity: 1 });
  }, []);

  return (
    <div className="outerDivOfScrollinText">
      <div className="scrollContainer fluidOfScrollingText">
        <div className="indicator"></div>
        <ul className="unorderedListOfScrollingText">
          <li className="liOfScrollingText">Infinite</li>
          <li className="liOfScrollingText">loops</li>
          <li className="liOfScrollingText">without</li>
          <li className="liOfScrollingText">repeating</li>
          <li className="liOfScrollingText">or</li>
          <li className="liOfScrollingText">shuffling</li>
          <li className="liOfScrollingText">elements</li>
          <li className="liOfScrollingText">using</li>
          <li className="liOfScrollingText">GSAP</li>
          <li className="liOfScrollingText">GSAP</li>
          <li className="liOfScrollingText">GSAP</li>
          <li className="liOfScrollingText">GSAP</li>
          <li className="liOfScrollingText">GSAP</li>
          <li className="liOfScrollingText" style={{ width: '1.5em' }}>
            🤙
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollingText;
