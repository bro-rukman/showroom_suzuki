import React from 'react'
import {Link} from 'react-router-dom'

export default function RenderCardMobil(item) {
    console.log(item);
    return (
        <div className="d-flex align-items-center">
            <div>
                <img src={item.data.image} alt="cars" style={{width:'100%'}}/>
            </div>
            <div>
                <p>{item.data.title}</p>
                <p>Mulai dari</p>
                <p>{item.data.price}</p>
                <Link>
                    <button>Lihat Detail</button>
                </Link>
            </div>

        </div>
    )
}
