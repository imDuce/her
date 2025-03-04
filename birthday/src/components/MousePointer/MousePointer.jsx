import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};



// const MousePointer = () => {
//     const config = {
//         distance: 10,
//         glow: true,
//       };

//       useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);
    
//         const canvas = document.querySelector('canvas');
//         const ctx = canvas.getContext('2d');
//         const icon = document.querySelector('.icon');
//         const svgData = new XMLSerializer().serializeToString(icon);
    
//         const setCanvasSize = () => {
//             const ratio = window.devicePixelRatio || 1;
//             canvas.width = window.innerWidth * ratio;
//             canvas.height = window.innerHeight * ratio;
//             ctx.scale(ratio, ratio); // Scale the context to match the device pixel ratio
//             canvas.style.position = 'absolute';
//             canvas.style.top = '0';
//             canvas.style.left = '0';
//             canvas.style.width = '100%';
//             canvas.style.height = '100%';
//             canvas.style.zIndex = '9999'; // Ensure it's on top
//             canvas.style.pointerEvents = 'none'; // Allow clicks to pass through
//         };
//         setCanvasSize();
//         window.addEventListener('resize', setCanvasSize);
    
//         // Create a new Image object
//         const img = new Image();
    
//         // Create a Data URI for the SVG
//         const svgBlob = new Blob([svgData], {
//           type: 'image/svg+xml;charset=utf-8',
//         });
//         const url = URL.createObjectURL(svgBlob);
    
//         // When the image loads, draw it onto the canvas
//         img.onload = function () {
//           // ctx.drawImage(img, window.innerWidth * 0.5, window.innerHeight * 0.5, 20, 20)
//           // Release the object URL since it's no longer needed
//           URL.revokeObjectURL(url);
//         };
    
//         // Set the image source to the Data URI
//         img.src = url;
//         let parts = [];
//         let glows = [];
    
//         const render = () => {
//           ctx.clearRect(
//             0,
//             0,
//             window.innerWidth * window.devicePixelRatio,
//             window.innerHeight * window.devicePixelRatio
//           );
    
//           for (const glow of glows) {
//             ctx.beginPath();
//             // Draw the circle
//             // arc(x, y, radius, startAngle, endAngle, anticlockwise)
//             ctx.arc(glow.x, glow.y, glow.size * glow.scale, 0, Math.PI * 2);
//             // Optional: set fill color
//             ctx.fillStyle = 'hsl(265 90% 80% / 0.2)';
//             // Fill the circle
//             ctx.fill();
//           }
    
//           for (const part of parts) {
//             ctx.save();
//             ctx.globalAlpha = part.alpha;
//             // ctx.filter = `hue-rotate(${part.sy < 0 ? '150' : '0'}deg) brightness(${
//             //   part.sy < 0 ? part.b - 0.5 : part.b
//             // })`
//             ctx.filter = `brightness(${part.sy < 0 ? part.b + 0.5 : part.b})`;
    
//             // const x = part.x - part.size * 0.5
//             // const y = part.y - part.size * 0.5
//             const x = part.x;
//             const y = part.y;
//             // Rotate after translate
//             ctx.translate(x, y);
    
//             // Rotate the canvas by the specified angle (in radians)
//             ctx.rotate(part.r * (Math.PI / 180));
//             ctx.scale(1, part.sy);
    
//             ctx.drawImage(
//               img,
//               // part.size * -0.5,
//               // part.size * -0.5,
//               part.size * part.scale * -0.5,
//               part.size * part.scale * -0.5,
//               part.size * part.scale,
//               part.size * part.scale
//             );
//             ctx.restore();
//           }
//         };
    
//         let distance = 0;
//         let lastPoint = [];


//         // const paint = ({ x, y }) => {
//         //   const last = lastPoint;
//         //   const dist = Math.hypot(x - last[0], y - last[1]);
//         //   lastPoint = [x, y];
    
//         //   if (!Number.isNaN(dist)) distance += dist;
    
//         //   if (config.glow) {
//         //     const glow = {
//         //       id: `glow--${Date.now()}`,
//         //       size: 30,
//         //       scale: 1,
//         //       x,
//         //       y,
//         //     };
//         //     gsap.to(glow, {
//         //       onComplete: () => {
//         //         glows = glows.filter((g) => g.id !== glow.id);
//         //       },
//         //       duration: 0.2,
//         //       scale: 0,
//         //     });
//         //     glows.push(glow);
//         //   }
    
//         //   if (distance >= config.distance) {
//         //     distance = 0;
    
//         //     const newPart = {
//         //       id: Date.now(),
//         //       x,
//         //       y,
//         //       sy: Math.random() > 0.5 ? 1 : -1,
//         //       b: gsap.utils.random(0.5, 1.5),
//         //       r: gsap.utils.random(0, 359, 1),
//         //       hue: gsap.utils.random(0, 359, 1),
//         //       size: gsap.utils.random(10, 40, 1),
//         //       scale: 1,
//         //       alpha: 1,
//         //     };
//         //     const spin = gsap.to(newPart, {
//         //       sy: newPart.sy < 0 ? 1 : -1,
//         //       duration: gsap.utils.random(0.1, 0.5),
//         //       repeat: gsap.utils.random(0, 10, 1),
//         //     });
//         //     gsap.to(newPart, {
//         //       onComplete: () => {
//         //         spin.kill();
//         //         parts = parts.filter((p) => p.id !== newPart.id);
//         //       },
//         //       duration: gsap.utils.random(0.5, 2.5),
//         //       r: newPart.r + gsap.utils.random(-45, 45, 1),
//         //       y: y + gsap.utils.random(50, 350, 1),
//         //       alpha: 0,
//         //       scale: 0,
//         //     });
//         //     parts.push(newPart);
//         //   }
//         // };


//         // const paint = ({ x, y }) => {
//         //     const last = lastPoint;
//         //     const dist = Math.hypot(x - last[0], y - last[1]);
//         //     lastPoint = [x, y];
        
//         //     // Adjust coordinates for device pixel ratio
//         //     const adjustedX = x * window.devicePixelRatio;
//         //     const adjustedY = y * window.devicePixelRatio;
        
//         //     if (!Number.isNaN(dist)) distance += dist;
        
//         //     if (config.glow) {
//         //         const glow = {
//         //             id: `glow--${Date.now()}`,
//         //             size: 30,
//         //             scale: 1,
//         //             x: adjustedX,
//         //             y: adjustedY,
//         //         };
//         //         gsap.to(glow, {
//         //             onComplete: () => {
//         //                 glows = glows.filter((g) => g.id !== glow.id);
//         //             },
//         //             duration: 0.2,
//         //             scale: 0,
//         //         });
//         //         glows.push(glow);
//         //     }
        
//         //     if (distance >= config.distance) {
//         //         distance = 0;
        
//         //         const newPart = {
//         //             id: Date.now(),
//         //             x: adjustedX,
//         //             y: adjustedY,
//         //             sy: Math.random() > 0.5 ? 1 : -1,
//         //             b: gsap.utils.random(0.5, 1.5),
//         //             r: gsap.utils.random(0, 359, 1),
//         //             hue: gsap.utils.random(0, 359, 1),
//         //             size: gsap.utils.random(10, 40, 1),
//         //             scale: 1,
//         //             alpha: 1,
//         //         };
//         //         const spin = gsap.to(newPart, {
//         //             sy: newPart.sy < 0 ? 1 : -1,
//         //             duration: gsap.utils.random(0.1, 0.5),
//         //             repeat: gsap.utils.random(0, 10, 1),
//         //         });
//         //         gsap.to(newPart, {
//         //             onComplete: () => {
//         //                 spin.kill();
//         //                 parts = parts.filter((p) => p.id !== newPart.id);
//         //             },
//         //             duration: gsap.utils.random(0.5, 2.5),
//         //             r: newPart.r + gsap.utils.random(-45, 45, 1),
//         //             y: adjustedY + gsap.utils.random(50, 350, 1),
//         //             alpha: 0,
//         //             scale: 0,
//         //         });
//         //         parts.push(newPart);
//         //     }
//         // };


//         // document.body.addEventListener('pointermove', paint);
//         // gsap.ticker.add(render);
// // this one worked





//         const paint = ({ x, y }) => {
//             const last = lastPoint;
//             const dist = Math.hypot(x - last[0], y - last[1]);
//             lastPoint = [x, y];

//             if (!Number.isNaN(dist)) distance += dist;

//             if (config.glow) {
//                 const glow = {
//                     id: `glow--${Date.now()}`,
//                     size: 30,
//                     scale: 1,
//                     x,
//                     y,
//                 };
//                 gsap.to(glow, {
//                     onComplete: () => {
//                         glows = glows.filter((g) => g.id !== glow.id);
//                     },
//                     duration: 0.2,
//                     scale: 0,
//                 });
//                 glows.push(glow);
//             }

//             if (distance >= config.distance) {
//                 distance = 0;

//                 const newPart = {
//                     id: Date.now(),
//                     x,
//                     y,
//                     sy: Math.random() > 0.5 ? 1 : -1,
//                     b: gsap.utils.random(0.5, 1.5),
//                     r: gsap.utils.random(0, 359, 1),
//                     hue: gsap.utils.random(0, 359, 1),
//                     size: gsap.utils.random(10, 40, 1),
//                     scale: 1,
//                     alpha: 1,
//                 };
//                 const spin = gsap.to(newPart, {
//                     sy: newPart.sy < 0 ? 1 : -1,
//                     duration: gsap.utils.random(0.1, 0.5),
//                     repeat: gsap.utils.random(0, 10, 1),
//                 });
//                 gsap.to(newPart, {
//                     onComplete: () => {
//                         spin.kill();
//                         parts = parts.filter((p) => p.id !== newPart.id);
//                     },
//                     duration: gsap.utils.random(0.5, 2.5),
//                     r: newPart.r + gsap.utils.random(-45, 45, 1),
//                     y: y + gsap.utils.random(50, 350, 1),
//                     alpha: 0,
//                     scale: 0,
//                 });
//                 parts.push(newPart);
//             }
//         };

//         document.body.addEventListener('pointermove', paint);
//         gsap.ticker.add(render);


//         return () => {
//             window.removeEventListener('resize', setCanvasSize);
//         };
    
//       }, []);

//   return (
//     <div className='mousePointer'>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 20 20"
//         fill="hsl(40 90% 80%)"
//         className="sr-only icon"
//       >
//         <path
//           fillRule="evenodd"
//           d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
//           clipRule="evenodd"
//         />
//       </svg>

//       <canvas></canvas>
//     </div>
//   )
// }





const MousePointer = () => {
    const config = {
        distance: 0,
        glow: true,
    };

    const partsRef = useRef([]);
    const glowsRef = useRef([]);
    const lastPointRef = useRef([0, 0]);
    const distanceRef = useRef(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const icon = document.querySelector('.icon');
        const svgData = new XMLSerializer().serializeToString(icon);

        const setCanvasSize = () => {
            const ratio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * ratio;
            canvas.height = window.innerHeight * ratio;
            ctx.scale(ratio, ratio);
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.zIndex = '9999';
            canvas.style.pointerEvents = 'none';
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const img = new Image();
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        img.onload = function () {
            URL.revokeObjectURL(url);
        };

        img.src = url;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const glow of glowsRef.current) {
                ctx.beginPath();
                ctx.arc(glow.x, glow.y, glow.size * glow.scale, 0, Math.PI * 2);
                ctx.fillStyle = 'hsl(265 90% 80% / 0.2)';
                ctx.fill();
            }

            for (const part of partsRef.current) {
                ctx.save();
                ctx.globalAlpha = part.alpha;
                ctx.filter = `brightness(${part.sy < 0 ? part.b + 0.5 : part.b})`;
                ctx.translate(part.x, part.y);
                ctx.rotate(part.r * (Math.PI / 180));
                ctx.scale(1, part.sy);
                ctx.drawImage(
                    img,
                    part.size * part.scale * -0.5,
                    part.size * part.scale * -0.5,
                    part.size * part.scale,
                    part.size * part.scale
                );
                ctx.restore();
            }

            requestAnimationFrame(render);
        };

        const paint = throttle(({ x, y }) => {
            const last = lastPointRef.current;
            const dist = Math.hypot(x - last[0], y - last[1]);
            lastPointRef.current = [x, y];

            if (!Number.isNaN(dist)) distanceRef.current += dist;

            if (config.glow) {
                const glow = {
                    id: `glow--${Date.now()}`,
                    size: 30,
                    scale: 1,
                    x,
                    y,
                };
                gsap.to(glow, {
                    onComplete: () => {
                        glowsRef.current = glowsRef.current.filter((g) => g.id !== glow.id);
                    },
                    duration: 0.2,
                    scale: 0,
                });
                glowsRef.current.push(glow);
            }

            if (distanceRef.current >= config.distance) {
                distanceRef.current = 0;

                const newPart = {
                    id: Date.now(),
                    x,
                    y,
                    sy: Math.random() > 0.5 ? 1 : -1,
                    b: gsap.utils.random(0.5, 1.5),
                    r: gsap.utils.random(0, 359, 1),
                    hue: gsap.utils.random(0, 359, 1),
                    size: gsap.utils.random(10, 40, 1),
                    scale: 1,
                    alpha: 1,
                };
                const spin = gsap.to(newPart, {
                    sy: newPart.sy < 0 ? 1 : -1,
                    duration: gsap.utils.random(0.1, 0.5),
                    repeat: gsap.utils.random(0, 10, 1),
                });
                gsap.to(newPart, {
                    onComplete: () => {
                        spin.kill();
                        partsRef.current = partsRef.current.filter((p) => p.id !== newPart.id);
                    },
                    duration: gsap.utils.random(0.5, 2.5),
                    r: newPart.r + gsap.utils.random(-45, 45, 1),
                    y: y + gsap.utils.random(50, 350, 1),
                    alpha: 0,
                    scale: 0,
                });
                partsRef.current.push(newPart);
            }
        }, 16); // Throttle to approximately 60fps

        document.body.addEventListener('pointermove', paint);
        requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            document.body.removeEventListener('pointermove', paint);
        };
    }, []);

    return (
        <div className='mousePointer'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="hsl(40 90% 80%)"
                className="sr-only icon"
            >
                <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                    clipRule="evenodd"
                />
            </svg>

            <canvas></canvas>
        </div>
    )
}

export default MousePointer