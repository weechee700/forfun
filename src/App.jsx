
import { useState, useEffect } from 'react'
import loveSong from './assets/love.mp3'
import miffy from './assets/miffy.png'
import heartImg from './assets/heart.png'
import evilImg from './assets/evil.png'
import loveImg from './assets/love.png'


function App() {
  // const [mouse, setMouse] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     const move = (e) => {
  //       setMouse({ x: e.clientX - 75, y: e.clientY - 75 });
  //     };
  //     window.addEventListener('mousemove', move);
  //     return () => window.removeEventListener('mousemove', move);
  //   }, []);

  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 })
  const [accepted, setAccepted] = useState(false)

  const moveNoButton = () => {
    const randomTop = Math.random() * 300 - 150
    const randomLeft = Math.random() * 300 - 150
    setNoPosition({ top: randomTop, left: randomLeft })
  }

  useEffect(() => {
    const butterflies = document.querySelectorAll('.butterfly')
    butterflies.forEach((b) => {
      b.style.left = Math.random() * 100 + 'vw'
      b.style.animationDuration = 5 + Math.random() * 5 + 's'
    })
  }, [])

  return (
    <div className="container">
      <audio src={loveSong} autoPlay loop />
      <img src={miffy} className="miffy" alt="Miffy" />
      {/* <img 
        src={miffy} 
        className="miffy"
        alt="Miffy"
        style={{ left: mouse.x, top: mouse.y }}
      /> */}
     <h1>
        Will You Be My Valentine?
        <img src={heartImg} alt="love" className="inline-icon" />
      </h1>


      {!accepted ? (
        <div className="buttons">
          <button className="yes" onClick={() => setAccepted(true)}>
           Yes <img src={loveImg} alt="yes" className="button-icon" />
          </button>
          <button
            className="no"
            onMouseEnter={moveNoButton}
            style={{ transform: `translate(${noPosition.left}px, ${noPosition.top}px)` }}
          >
            No <img src={evilImg} alt="no" className="button-icon" />
          </button>
        </div>
      ) : (
        <div className="love-message">
          <h2>I LOVE YOU SUPER DUPER ULTRA MEGA MUCH</h2>
        </div>
         )}
         {accepted && (
            <div className="fireworks">
              {[...Array(25)].map((_, i) => {
                // Random center for each explosion
                const centerX = Math.random() * window.innerWidth;
                const centerY = Math.random() * window.innerHeight;

                // Each explosion has multiple particles
                const particles = [...Array(20)].map((_, j) => {
                  const angle = Math.random() * 2 * Math.PI;
                  const distance = 50 + Math.random() * 100; // how far particles fly
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;

                  return (
                    <div
                      key={j}
                      className="firework"
                      style={{
                        left: centerX + "px",
                        top: centerY + "px",
                        transform: "translate(0,0) scale(0)",
                        animation: `explode 1.2s ease-out forwards`,
                        "--dx": `${x}px`,
                        "--dy": `${y}px`,
                      }}
                    />
                  );
                });

                return <>{particles}</>;
              })}
            </div>
          )}





      {/* Butterflies */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="butterfly">🦋</div>
      ))}
    </div>
  )
}

export default App
