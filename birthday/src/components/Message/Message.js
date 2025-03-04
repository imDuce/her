// import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
// import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'

// const config = {
//   theme: 'dark',
//   animate: true,
//   snap: true,
//   start: gsap.utils.random(0, 100, 1),
//   end: gsap.utils.random(900, 1000, 1),
//   scroll: true,
//   debug: false,
// }



// let items
// let scrollerScrub
// let dimmerScrub
// let chromaEntry
// let chromaExit

// const update = () => {
//   document.documentElement.dataset.theme = config.theme
//   document.documentElement.dataset.syncScrollbar = config.scroll
//   document.documentElement.dataset.animate = config.animate
//   document.documentElement.dataset.snap = config.snap
//   document.documentElement.dataset.debug = config.debug
//   document.documentElement.style.setProperty('--start', config.start)
//   document.documentElement.style.setProperty('--hue', config.start)
//   document.documentElement.style.setProperty('--end', config.end)

//   if (!config.animate) {
//     chromaEntry?.scrollTrigger.disable(true, false)
//     chromaExit?.scrollTrigger.disable(true, false)
//     dimmerScrub?.disable(true, false)
//     scrollerScrub?.disable(true, false)
//     gsap.set(items, { opacity: 1 })
//     gsap.set(document.documentElement, { '--chroma': 0 })
//   } else {
//     gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) })
//     dimmerScrub.enable(true, true)
//     scrollerScrub.enable(true, true)
//     chromaEntry.scrollTrigger.enable(true, true)
//     chromaExit.scrollTrigger.enable(true, true)
//   }
// }

// const sync = (event) => {
//   if (
//     !document.startViewTransition ||
//     event.target.controller.view.labelElement.innerText !== 'Theme'
//   )
//     return update()
//   document.startViewTransition(() => update())
// }
// // backfill the scroll functionality with GSAP
// if (
//   !CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')
// ) {
//   gsap.registerPlugin(ScrollTrigger)

//   // animate the items with GSAP if there's no CSS support
//   items = gsap.utils.toArray('ul li')

//   gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) })

//   const dimmer = gsap
//     .timeline()
//     .to(items.slice(1), {
//       opacity: 1,
//       stagger: 0.5,
//     })
//     .to(
//       items.slice(0, items.length - 1),
//       {
//         opacity: 0.2,
//         stagger: 0.5,
//       },
//       0
//     )

//   dimmerScrub = ScrollTrigger.create({
//     trigger: items[0],
//     endTrigger: items[items.length - 1],
//     start: 'center center',
//     end: 'center center',
//     animation: dimmer,
//     scrub: 0.2,
//   })

//   // register scrollbar changer
//   const scroller = gsap.timeline().fromTo(
//     document.documentElement,
//     {
//       '--hue': config.start,
//     },
//     {
//       '--hue': config.end,
//       ease: 'none',
//     }
//   )

//   scrollerScrub = ScrollTrigger.create({
//     trigger: items[0],
//     endTrigger: items[items.length - 1],
//     start: 'center center',
//     end: 'center center',
//     animation: scroller,
//     scrub: 0.2,
//   })

//   chromaEntry = gsap.fromTo(
//     document.documentElement,
//     {
//       '--chroma': 0,
//     },
//     {
//       '--chroma': 0.3,
//       ease: 'none',
//       scrollTrigger: {
//         scrub: 0.2,
//         trigger: items[0],
//         start: 'center center+=40',
//         end: 'center center',
//       },
//     }
//   )
//   chromaExit = gsap.fromTo(
//     document.documentElement,
//     {
//       '--chroma': 0.3,
//     },
//     {
//       '--chroma': 0,
//       ease: 'none',
//       scrollTrigger: {
//         scrub: 0.2,
//         trigger: items[items.length - 2],
//         start: 'center center',
//         end: 'center center-=40',
//       },
//     }
//   )
// }
// // run it
// update()







// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import "./Message.css"; 
// // import '../../App.css'

// const Message = () => {
//   const config = {
//     theme: 'dark',
//     animate: true,
//     snap: false,
//     start: gsap.utils.random(0, 100, 1),
//     end: gsap.utils.random(900, 1000, 1),
//     scroll: true,
//     debug: false,
//   };

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     let items = [];
//     let scrollerScrub = null;
//     let dimmerScrub = null;
//     let chromaEntry = null;
//     let chromaExit = null;

//     const update = () => {
//       document.documentElement.dataset.theme = config.theme;
//       document.documentElement.dataset.syncScrollbar = config.scroll;
//       document.documentElement.dataset.animate = config.animate;
//       document.documentElement.dataset.snap = config.snap;
//       document.documentElement.dataset.debug = config.debug;
//       document.documentElement.style.setProperty('--start', config.start);
//       document.documentElement.style.setProperty('--hue', config.start);
//       document.documentElement.style.setProperty('--end', config.end);

//       if (!config.animate) {
//         chromaEntry?.scrollTrigger?.disable(true, false);
//         chromaExit?.scrollTrigger?.disable(true, false);
//         dimmerScrub?.disable(true, false);
//         scrollerScrub?.disable(true, false);
//         gsap.set(items, { opacity: 1 });
//         gsap.set(document.documentElement, { '--chroma': 0 });
//       } else {
//         gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });
//         dimmerScrub?.enable(true, true);
//         scrollerScrub?.enable(true, true);
//         chromaEntry?.scrollTrigger?.enable(true, true);
//         chromaExit?.scrollTrigger?.enable(true, true);
//       }
//     };

//     const sync = (event) => {
//       if (
//         !document.startViewTransition ||
//         event.target.controller.view.labelElement.innerText !== 'Theme'
//       )
//         return update();
//       document.startViewTransition(() => update());
//     };

//     if (
//       !CSS.supports(
//         '(animation-timeline: scroll()) and (animation-range: 0% 100%)'
//       )
//     ) {
//       items = gsap.utils.toArray('ul li');
//       gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

//       const dimmer = gsap
//         .timeline()
//         .to(items.slice(1), {
//           opacity: 1,
//           stagger: 0.5,
//         })
//         .to(
//           items.slice(0, items.length - 1),
//           {
//             opacity: 0.2,
//             stagger: 0.5,
//           },
//           0
//         );

//       dimmerScrub = ScrollTrigger.create({
//         trigger: items[0],
//         endTrigger: items[items.length - 1],
//         start: 'center center',
//         end: 'center center',
//         animation: dimmer,
//         scrub: 0.2,
//       });

//       const scroller = gsap
//         .timeline()
//         .fromTo(
//           document.documentElement,
//           { '--hue': config.start },
//           { '--hue': config.end, ease: 'none' }
//         );

//       scrollerScrub = ScrollTrigger.create({
//         trigger: items[0],
//         endTrigger: items[items.length - 1],
//         start: 'center center',
//         end: 'center center',
//         animation: scroller,
//         scrub: 0.2,
//       });

//       chromaEntry = gsap.fromTo(
//         document.documentElement,
//         { '--chroma': 0 },
//         {
//           '--chroma': 0.3,
//           ease: 'none',
//           scrollTrigger: {
//             scrub: 0.2,
//             trigger: items[0],
//             start: 'center center+=40',
//             end: 'center center',
//           },
//         }
//       );

//       chromaExit = gsap.fromTo(
//         document.documentElement,
//         { '--chroma': 0.3 },
//         {
//           '--chroma': 0,
//           ease: 'none',
//           scrollTrigger: {
//             scrub: 0.2,
//             trigger: items[items.length - 2],
//             start: 'center center',
//             end: 'center center-=40',
//           },
//         }
//       );
//     }

//     update();
//   }, []);

//   return (
//     <div>
//       <header>
//         <h1 className="fluid">
//           you can
//           <br />
//           scroll.
//         </h1>
//       </header>
//       <main>
//         <section className="content fluid">
//           <h2>
//             <span aria-hidden="true">you can&nbsp;</span>

//             <span className="sr-only">you can ship things.</span>
//           </h2>
//           <ul aria-hidden="true" style={{ '--count': 22 }}>
//             <li style={{ '--i': 0 }}>design.</li>
//             <li style={{ '--i': 1 }}>prototype.</li>
//             <li style={{ '--i': 2 }}>solve.</li>
//             <li style={{ '--i': 3 }}>build.</li>
//             <li style={{ '--i': 4 }}>develop.</li>
//             <li style={{ '--i': 5 }}>debug.</li>
//             <li style={{ '--i': 6 }}>learn.</li>
//             <li style={{ '--i': 7 }}>cook.</li>
//             <li style={{ '--i': 8 }}>ship.</li>
//             <li style={{ '--i': 9 }}>prompt.</li>
//             <li style={{ '--i': 10 }}>collaborate.</li>
//             <li style={{ '--i': 11 }}>create.</li>
//             <li style={{ '--i': 12 }}>inspire.</li>
//             <li style={{ '--i': 13 }}>follow.</li>
//             <li style={{ '--i': 14 }}>innovate.</li>
//             <li style={{ '--i': 15 }}>test.</li>
//             <li style={{ '--i': 16 }}>optimize.</li>
//             <li style={{ '--i': 17 }}>teach.</li>
//             <li style={{ '--i': 18 }}>visualize.</li>
//             <li style={{ '--i': 19 }}>transform.</li>
//             <li style={{ '--i': 20 }}>scale.</li>
//             <li style={{ '--i': 21 }}>do it.</li>
//           </ul>
//         </section>
//         <section>
//           <h2 className="fluid">#believe</h2>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Message;
