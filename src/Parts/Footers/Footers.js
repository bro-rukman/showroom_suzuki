import React from 'react'
import {Link} from 'react-router-dom'
import Image12 from '../../Assets/Images/image 12.png'
import Image13 from '../../Assets/Images/image 13.png'
import Image14 from '../../Assets/Images/image14.png'
import Phone from '../../Assets/Images/Icon/Callwhite.svg'
import Location from '../../Assets/Images/Icon/PinPrimary.svg'

export default function Footers(props) {
    console.log(props);
    return (
        <>
            <div className="bg-white mx-auto h-100">
                        <div className="container mt-2" style={{marginTop:'20px'}}>
                            <div className="p-2">
                                <ul className="text-center" style={{padding:0}}>
                                    {
                                        props?.data?.list?.length > 0 ? (props?.data?.list?.map((item,index)=>{
                                            return(
                                                <li className="inline px-2" data={item} key={index}>
                                                    <Link to={item.path} className="text-dark text-600">{item.title}</Link>
                                                </li>
                                            )
                                        })) : (
                                            <p className="text-center">No Data</p>
                                        )
                                    }
                                </ul>
                            </div>
                            <hr />
                            <p className="text-center fs-16 text-700">ALAMAT</p>
                            <p className="text-center fs-14 text-700 m-0">{props.data.title}</p>
                            <p className="text-center fs-14 text-400 m-0">{props.data.alamat}</p>
                            <div className="d-flex justify-content-center align-items-center location">
                                <img src={Location} alt="" />
                                <p className="text-center px-3 py-2 text-primary m-0 fs-16 text-600">CEK GOOGLE MAPS</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center phone bg-primary mx-4 mt-2">
                                <img src={Phone} alt=""/>
                                <p className="text-center px-3 py-2 text-white m-0 fs-16 text-600">{props.data.phone_number}</p>
                            </div>
                            <hr className="my-3"/>
                            <p className="text-center fs-16 text-700">HOTLINE 24 JAM (Bebas Pulsa)</p>
                            <div className="d-flex justify-content-center mb-2">
                                <img src={Image12} alt="" />
                            </div>
                            <p className="text-center fs-16 text-700">DOWNLOAD MY SUZUKI</p>
                            <div className="d-flex justify-content-center">
                                <img src={Image13} alt="" />
                            </div>
                            <div className="d-flex justify-content-center mb-2">
                                <img src={Image14} alt="" />
                            </div>
                        </div>
                        <div className="bg-primary" style={{height:'112px'}}>
                            <p className="text-300 fs-14 text-white text-center p-3 m-0" style={{paddingTop:'23px'}}>&copy; 2020 Suzuki Indonesia <br /> All rights reserved</p>
                        </div>
                    </div>
        </>
    )
}
