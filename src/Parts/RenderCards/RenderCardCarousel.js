import React from 'react'
import '../../Assets/Css/style.css'

export default function RenderCardCarousel(props) {
    return (
        <div className="relative">
            <img src={props.data.image} alt="carousel"/>
            <div className="carousel-absolute">
                <img src={props.data.sub_image} alt=""/>
            </div>
            <p className="text-center">{props.data.id}</p>
        </div>
    )
}
