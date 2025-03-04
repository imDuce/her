// satisfied with this code ---> 


// import React, { useEffect, useRef } from "react";

// const BalloonCanvas = () => {
//   const canvasRef = useRef(null);
//   const bufferCanvasRef = useRef(document.createElement("canvas"));
//   let requestId = useRef(null);
//   let frames = 0;
//   let balloons = [];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const bc = bufferCanvasRef.current;
//     const bCtx = bc.getContext("2d");

//     let cw = (canvas.width = bc.width = window.innerWidth);
//     let ch = (canvas.height = bc.height = window.innerHeight + 100);

//     bCtx.strokeStyle = "#abcdef";
//     bCtx.lineWidth = 1;

//     const rad = Math.PI / 180;
//     const kappa = 0.5522847498;

//     function randomIntFromInterval(mn, mx) {
//       return Math.floor(Math.random() * (mx - mn + 1) + mn);
//     }

//     function Balloon() {
//       this.r = randomIntFromInterval(20, 70);
//       this.R = 1.4 * this.r;
//       this.x = randomIntFromInterval(this.r, cw - this.r);
//       this.y = ch + 2 * this.r;
//       this.a = this.r * 4.5;
//       this.pm = Math.random() < 0.5 ? -1 : 1;
//       this.speed = randomIntFromInterval(1.5, 4);
//       this.k = this.speed / 5;
//       this.hue = this.pm > 0 ? "210" : "10";
//     }

//     function updateBalloons(ctx) {
//       frames++;
//       if (frames % 37 === 0 && balloons.length < 37) {
//         balloons.push(new Balloon());
//       }
//       ctx.clearRect(0, 0, cw, ch);

//       balloons.forEach((b) => {
//         if (b.y > -b.a) {
//           b.y -= b.speed;
//         } else {
//           b.y = ch + b.r + b.R;
//         }

//         const p = thread(b, ctx);
//         b.cx = p.x;
//         b.cy = p.y - b.R;
//         ctx.fillStyle = getGradient(p.x, p.y, b.r, b.hue);
//         drawBalloon(b, ctx);
//       });
//     }

//     function drawBalloon(b, ctx) {
//       const or = b.r * kappa;
//       ctx.beginPath();
//       ctx.moveTo(b.cx, b.cy + b.R);
//       ctx.bezierCurveTo(b.cx - or, b.cy + b.R, b.cx - b.r, b.cy + or, b.cx - b.r, b.cy);
//       ctx.bezierCurveTo(b.cx - b.r, b.cy - or, b.cx - or, b.cy - b.r, b.cx, b.cy - b.r);
//       ctx.bezierCurveTo(b.cx + or, b.cy - b.r, b.cx + b.r, b.cy - or, b.cx + b.r, b.cy);
//       ctx.bezierCurveTo(b.cx + b.r, b.cy + or, b.cx + or, b.cy + b.R, b.cx, b.cy + b.R);
//       ctx.fill();
//     }

//     function thread(b, ctx) {
//       ctx.beginPath();
//       ctx.strokeStyle = "white";
//       let x, y;
//       for (let i = b.a; i > 0; i -= 1) {
//         const t = i * rad;
//         x = b.x + b.pm * 50 * Math.cos(b.k * t - frames * rad);
//         y = b.y + b.pm * 25 * Math.sin(b.k * t - frames * rad) + 50 * t;
//         ctx.lineTo(x, y);
//       }
//       ctx.stroke();
//       return { x, y };
//     }

//     function getGradient(x, y, r, hue) {
//       const grd = ctx.createRadialGradient(x - 0.5 * r, y - 1.7 * r, 0, x - 0.5 * r, y - 1.7 * r, r);
//       grd.addColorStop(0, `hsla(${hue},100%,65%,.95)`);
//       grd.addColorStop(0.4, `hsla(${hue},100%,45%,.85)`);
//       grd.addColorStop(1, `hsla(${hue},100%,25%,.80)`);
//       return grd;
//     }

//     function draw() {
//       updateBalloons(bCtx);
//       ctx.clearRect(0, 0, cw, ch);
//       ctx.drawImage(bc, 0, 0);
//       requestId.current = requestAnimationFrame(draw);
//     }

//     function init() {
//       if (requestId.current) {
//         cancelAnimationFrame(requestId.current);
//       }
//       cw = canvas.width = bc.width = window.innerWidth;
//       ch = canvas.height = bc.height = window.innerHeight + 100;
//       draw();
//     }

//     setTimeout(() => {
//       init();
//       window.addEventListener("resize", init);
//     }, 15);

//     return () => {
//       cancelAnimationFrame(requestId.current);
//       window.removeEventListener("resize", init);
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", display: "block" }} />;
// };

// export default BalloonCanvas;




// WORKING 


// import React, { useEffect, useRef } from "react";

// const BalloonCanvas = () => {
//   const canvasRef = useRef(null);
//   const bufferCanvasRef = useRef(document.createElement("canvas"));
//   let requestId = useRef(null);
//   let frames = 0;
//   let balloons = [];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const bc = bufferCanvasRef.current;
//     const bCtx = bc.getContext("2d");

//     let cw = (canvas.width = bc.width = window.innerWidth);
//     let ch = (canvas.height = bc.height = window.innerHeight + 100);

//     bCtx.strokeStyle = "#abcdef";
//     bCtx.lineWidth = 1;

//     const rad = Math.PI / 180;
//     const kappa = 0.5522847498;

//     function randomIntFromInterval(mn, mx) {
//       return Math.floor(Math.random() * (mx - mn + 1) + mn);
//     }

//     function randomHue() {
//       return Math.floor(Math.random() * 360);
//     }

//     function Balloon() {
//       this.r = randomIntFromInterval(20, 70);
//       this.R = 1.4 * this.r;
//       this.x = randomIntFromInterval(this.r, cw - this.r);
//       this.y = ch + 2 * this.r;
//       this.a = this.r * 4.5;
//       this.pm = Math.random() < 0.5 ? -1 : 1;
//       this.speed = randomIntFromInterval(1.5, 4);
//       this.k = this.speed / 5;
//       this.hue = randomHue();
//     }

//     function updateBalloons(ctx) {
//       frames++;
//       if (frames % 37 === 0 && balloons.length < 37) {
//         balloons.push(new Balloon());
//       }
//       ctx.clearRect(0, 0, cw, ch);

//       balloons.forEach((b) => {
//         if (b.y > -b.a) {
//           b.y -= b.speed;
//         } else {
//           b.y = ch + b.r + b.R;
//         }

//         const p = thread(b, ctx);
//         b.cx = p.x;
//         b.cy = p.y - b.R;
//         ctx.fillStyle = getGradient(p.x, p.y, b.r, b.hue);
//         drawBalloon(b, ctx);
//       });
//     }

//     function drawBalloon(b, ctx) {
//       const or = b.r * kappa;
//       ctx.beginPath();
//       ctx.moveTo(b.cx, b.cy + b.R);
//       ctx.bezierCurveTo(b.cx - or, b.cy + b.R, b.cx - b.r, b.cy + or, b.cx - b.r, b.cy);
//       ctx.bezierCurveTo(b.cx - b.r, b.cy - or, b.cx - or, b.cy - b.r, b.cx, b.cy - b.r);
//       ctx.bezierCurveTo(b.cx + or, b.cy - b.r, b.cx + b.r, b.cy - or, b.cx + b.r, b.cy);
//       ctx.bezierCurveTo(b.cx + b.r, b.cy + or, b.cx + or, b.cy + b.R, b.cx, b.cy + b.R);
//       ctx.fill();
//     }

//     function thread(b, ctx) {
//       ctx.beginPath();
//       ctx.strokeStyle = "white";
//       let x, y;
//       for (let i = b.a; i > 0; i -= 1) {
//         const t = i * rad;
//         x = b.x + b.pm * 50 * Math.cos(b.k * t - frames * rad);
//         y = b.y + b.pm * 25 * Math.sin(b.k * t - frames * rad) + 50 * t;
//         ctx.lineTo(x, y);
//       }
//       ctx.stroke();
//       return { x, y };
//     }

//     function getGradient(x, y, r, hue) {
//       const grd = ctx.createRadialGradient(x - 0.5 * r, y - 1.7 * r, 0, x - 0.5 * r, y - 1.7 * r, r);
//       grd.addColorStop(0, `hsla(${hue},100%,65%,.95)`);
//       grd.addColorStop(0.4, `hsla(${hue},100%,45%,.85)`);
//       grd.addColorStop(1, `hsla(${hue},100%,25%,.80)`);
//       return grd;
//     }

//     function draw() {
//       updateBalloons(bCtx);
//       ctx.clearRect(0, 0, cw, ch);
//       ctx.drawImage(bc, 0, 0);
//       requestId.current = requestAnimationFrame(draw);
//     }

//     function init() {
//       if (requestId.current) {
//         cancelAnimationFrame(requestId.current);
//       }
//       cw = canvas.width = bc.width = window.innerWidth;
//       ch = canvas.height = bc.height = window.innerHeight + 100;
//       draw();
//     }

//     setTimeout(() => {
//       init();
//       window.addEventListener("resize", init);
//     }, 15);

//     return () => {
//       cancelAnimationFrame(requestId.current);
//       window.removeEventListener("resize", init);
//     };
//   }, []);

//   return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", display: "block" }} />;
// };

// export default BalloonCanvas;




import React, { useEffect, useRef } from "react";

const BalloonCanvas = () => {
  const canvasRef = useRef(null);
  const bufferCanvasRef = useRef(document.createElement("canvas"));
  let requestId = useRef(null);
  let frames = 0;
  let balloons = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bc = bufferCanvasRef.current;
    const bCtx = bc.getContext("2d");

    let cw = (canvas.width = bc.width = window.innerWidth);
    let ch = (canvas.height = bc.height = window.innerHeight + 100);

    bCtx.strokeStyle = "#abcdef";
    bCtx.lineWidth = 1;

    const rad = Math.PI / 180;
    const kappa = 0.5522847498;

    function randomIntFromInterval(mn, mx) {
      return Math.floor(Math.random() * (mx - mn + 1) + mn);
    }

    function randomHue() {
      return Math.floor(Math.random() * 360);
    }

    function Balloon() {
      this.r = randomIntFromInterval(20, 70);
      this.R = 1.4 * this.r;
      this.x = randomIntFromInterval(this.r, cw - this.r);
      this.y = ch + 2 * this.r;
      this.a = this.r * 4.5;
      this.pm = Math.random() < 0.5 ? -1 : 1;
      this.speed = randomIntFromInterval(1.5, 4);
      this.k = this.speed / 5;
      this.hue = randomHue();
    }

    function updateBalloons(ctx) {
      frames++;
      if (frames % 37 === 0 && balloons.length < 37) {
        balloons.push(new Balloon());
      }
      ctx.clearRect(0, 0, cw, ch); // Ensure this clears the canvas without filling it

      balloons.forEach((b) => {
        if (b.y > -b.a) {
          b.y -= b.speed;
        } else {
          b.y = ch + b.r + b.R;
        }

        const p = thread(b, ctx);
        b.cx = p.x;
        b.cy = p.y - b.R;
        ctx.fillStyle = getGradient(p.x, p.y, b.r, b.hue);
        drawBalloon(b, ctx);
      });
    }

    function drawBalloon(b, ctx) {
      const or = b.r * kappa;
      ctx.beginPath();
      ctx.moveTo(b.cx, b.cy + b.R);
      ctx.bezierCurveTo(b.cx - or, b.cy + b.R, b.cx - b.r, b.cy + or, b.cx - b.r, b.cy);
      ctx.bezierCurveTo(b.cx - b.r, b.cy - or, b.cx - or, b.cy - b.r, b.cx, b.cy - b.r);
      ctx.bezierCurveTo(b.cx + or, b.cy - b.r, b.cx + b.r, b.cy - or, b.cx + b.r, b.cy);
      ctx.bezierCurveTo(b.cx + b.r, b.cy + or, b.cx + or, b.cy + b.R, b.cx, b.cy + b.R);
      ctx.fill();
    }

    function thread(b, ctx) {
      ctx.beginPath();
      ctx.strokeStyle = "lightgray";
      let x, y;
      for (let i = b.a; i > 0; i -= 1) {
        const t = i * rad;
        x = b.x + b.pm * 50 * Math.cos(b.k * t - frames * rad);
        y = b.y + b.pm * 25 * Math.sin(b.k * t - frames * rad) + 50 * t;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      return { x, y };
    }

    function getGradient(x, y, r, hue) {
      const grd = ctx.createRadialGradient(x - 0.5 * r, y - 1.7 * r, 0, x - 0.5 * r, y - 1.7 * r, r);
      grd.addColorStop(0, `hsla(${hue},100%,65%,.95)`);
      grd.addColorStop(0.4, `hsla(${hue},100%,45%,.85)`);
      grd.addColorStop(1, `hsla(${hue},100%,25%,.80)`);
      return grd;
    }

    function draw() {
      updateBalloons(bCtx);
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(bc, 0, 0);
      requestId.current = requestAnimationFrame(draw);
    }

    function init() {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current);
      }
      cw = canvas.width = bc.width = window.innerWidth;
      ch = canvas.height = bc.height = window.innerHeight + 100;
      draw();
    }

    setTimeout(() => {
      init();
      window.addEventListener("resize", init);
    }, 15);

    return () => {
      cancelAnimationFrame(requestId.current);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ backgroundColor: "transparent", position:"absolute", top:0, left:0, height:"100%", width:"100%", zIndex:1000 }} />;
};
// width: "100vw", height: "100vh",
export default BalloonCanvas;