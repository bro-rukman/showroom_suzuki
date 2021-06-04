import React from 'react'
import {Link} from 'react-router-dom'
import '../../Assets/Css/style.css'
import {FormatHarga} from '../../Configs/FormatHarga/FormatHarga'

export default function RenderCardMobil(item) {
    console.log(item);
    return (
        <div className="py-2">
            <div className="d-flex align-items-center mb-4 gap-3">
                <div>
                    <img src={item.data.image} alt="cars" style={{width:'100%'}}/>
                </div>
                <div>
                    <p className="fs-18 text-700">{item.data.title}</p>
                    <i className="fs-12 text-400">Mulai dari</i>
                    <p className="fs-14 text-700">Rp {FormatHarga(item.data.price)}</p>
                    <Link>
                        <button className="my-2 fs-12 text-400 text-primary border py-1 px-2 pointer">Lihat Detail</button>
                    </Link>
                </div>
            </div>
                <hr/>
        </div>
    )
}
