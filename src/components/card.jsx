import React from 'react'
import '../styles/card.scss'
import { StaticImage } from "gatsby-plugin-image"
import Img from 'gatsby-plugin-image'

const Card = (props) => {
  return (
    <div className={`card ${props.type}`}>
        <div className={'card-content'}>
            <img src={props.image} alt={props.alt}/>
        </div>
    </div>
  )
}

export default Card


