import React from 'react'
import './main.css'
import Marquee from "react-fast-marquee";

const Main = () => {
  return (
    <>
    <div className="main-section">

    <div>
      <Marquee speed={500}>
        <div className="image_wrapper">
        <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt=""  />
        </div>
        <div className="image_wrapper">
        <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt=""  />
        </div>
        <div className="image_wrapper">
        <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt=""  />
        </div>
        <div className="image_wrapper">
        <img src="https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt=""  />
        </div>
      </Marquee>
      <Marquee speed={500} direction="right">
        <div className="image_wrapper">
          <div className="img"></div>
          <div className="text">
            <p>Hey! Musharaf</p>
          </div>
        </div>

      </Marquee>
    </div>


    </div>
 
    </>
  )
}

export default Main