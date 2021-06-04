import React from 'react'
import {Link} from 'react-router-dom'
import '../../Assets/Css/style.css'
import {FormatHarga} from '../../Configs/FormatHarga/FormatHarga'

export default function RenderCardMobil(item) {
    return (
        <div className="py-2">
            <div className="d-flex align-items-center mb-4 gap-3">
                <div style={{minWidth:'143px'}}>
                    <img src={item.data.image} alt="cars" style={{width:'100%',objectFit:'cover'}}/>
                </div>
                <div>
                    <p className="fs-18 text-700">{item.data.title}</p>
                    <i className="fs-12 text-400">Mulai dari</i>
                    <p className="fs-14 text-700">Rp {FormatHarga(item.data.price)}</p>
                    <Link to={`/DetailMobil/${item.data.id}`}>
                        <button className="my-2 fs-12 text-400 text-primary border py-1 px-2 pointer btn-detail-cars">Lihat Detail</button>
                    </Link>
                </div>
            </div>
                <hr/>
        </div>
    )
}
