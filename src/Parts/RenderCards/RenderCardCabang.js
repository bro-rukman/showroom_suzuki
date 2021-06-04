import React from 'react'
import Phone from '../../Assets/Images/Icon/Call.svg'
import Location from '../../Assets/Images/Icon/Pin.svg'
import {Link} from 'react-router-dom'

export default function RenderCardCabang(item) {
    return (
        <div className="card bg-white rounded-8 box-shadow">
            <div className="image-thumbnail">
                <img src={item.data.image} alt="" style={{width : '100%'}}/>
            </div>
            <div className="card-body">
                <span className="label" style={{marginBottom:'10px'}}>{item.data.service}</span>
                <p className="m-0 text-title" style={{marginBottom:'10px'}}>{item.data.title}</p>
                <div className="d-flex align-items-center gap-2" style={{marginBottom:'10px'}}>
                    <img src={Phone} alt="" />
                    <span style={{fontSize:'12px'}}>{item.data.phone_number}</span>
                </div>
                <div className="d-flex align-items-center gap-2" style={{marginBottom:'12px'}}>
                    <img src={Location} alt="" />
                    <span style={{fontSize:'12px'}}>{item.data.alamat}</span>
                </div>
                <Link to={`/DetailOutlet/${item.data.id}`}><div className="btn-block pointer"><span className=" text-600 text-primary text-center">Kunjungi Website Outlet</span></div></Link>
            </div>
        </div>
    )
}
