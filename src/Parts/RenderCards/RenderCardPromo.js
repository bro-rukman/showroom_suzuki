import React from 'react'

export default function RenderCardPromo(item) {
    return (
        <div className="card bg-white rounded-8 box-shadow">
            <div className="image-thumbnail">
                <img src={item.data.image} alt="" style={{width : '100%'}}/>
            </div>
            <div className="card-body">
                <span style={{fontSize:'12px'}}>{item.data.date}</span>
                <p className="text-title" style={{margin:0}}>{item.data.title}</p>    
            </div>
        </div>
    )
}
