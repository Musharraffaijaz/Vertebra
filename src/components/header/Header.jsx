import React from 'react'
import "./header.css";
import videoBg from '../../assets/glitch_2.mp4';

const Header = () => {
  return (
 <>
    <div className='main'>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Vertebra</h1>
            <p>on the way to become world’s biggest people owned media.</p>
        </div>
    </div>
  </>
  )
}

export default Header