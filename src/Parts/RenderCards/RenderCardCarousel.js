import React from 'react'
import '../../Assets/Css/style.css'

export default function RenderCardCarousel(props) {
    return (
        <div className="relative">
            <img src={props.data.image} alt="carousel" style={{width:'100%',display:'block'}}/>
            <div className="carousel-absolute">
                <img src={props.data.sub_image} alt=""/>
            </div>
        </div>
    )
}
