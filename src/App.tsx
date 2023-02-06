import { useState } from 'react'
import Spline from '@splinetool/react-spline';


import './App.scss'

export function App() {
  return (
    <>
      <nav className='navbar'>
      <ul>
        <li><a href='https://drive.google.com/file/d/1cfbK_ah6iWzgpt1KPs5qQkhoi7ycCAAh/view?usp=share_link' target="_blank">Ethan Amato</a></li>
        <li><a href='https://ethanamato.com' target="_blank">Portfolio</a></li>
        <li><a href='https://www.linkedin.com/in/ethan-amato/' target="_blank">LinkedIn</a></li>
        <li><a href='https://github.com/EthanAmato' target="_blank">Github</a></li>
      </ul>
      </nav>
      <div className='wrapper'>
        <Spline className="spline" scene="https://prod.spline.design/9ZefUzNjg-bqUnfW/scene.splinecode" />
        <div className='content'>
          <h1>Check out a whole new dimension in web design!</h1>
          <p>This project was completed using a frontend stack of   <br />
            <a href='https://www.figma.com/' target="_blank"> Figma,</a>  <br />
            <a href='https://spline.design' target="_blank"> Spline,</a> <br />
            and
            <a href='https://vitejs.dev' target="_blank"> Vite-React</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App
