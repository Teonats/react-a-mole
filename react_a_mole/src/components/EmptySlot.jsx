import React from 'react'
import { useEffect } from 'react'
import moleImg from "../assets/molehill.png"

export default function EmptySlot(props) {
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })


  return (
    <div>
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
             />
        </div>
    </div>
  )
}
