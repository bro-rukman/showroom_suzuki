import React,{useState} from 'react'
import './Tabs.css'
import '../../Assets/Css/style.css'
import RenderCardMobil from '../../Parts/RenderCards/RenderCardMobil'
import {Link} from 'react-router-dom'

export default function Tab(props) {
    const [Toggle, setToggle] = useState(1)
    const toggleTab =(index)=>{
        setToggle(index)
    }
    return (
        <>
            <div className="bloc-tabs">
                <button className={Toggle === 1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>Passenger Car</button>
                <button className={Toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Commercial Car</button>
            </div>
                <div className="bg-white">
                <div className="container">
                    <div className="content-tabs">
                        <div className={Toggle ===1 ? "content active-content" : "content"}>
                            <div className="pt-2">
                                {
                                    props?.data?.detail?.cars?.length > 0 ? (props?.data?.detail?.cars?.map((item,index)=>{
                                        return(
                                            <RenderCardMobil data={item} key={index}/>
                                        )
                                    })) : ('No data')
                                }
                            </div>
                            <div className="d-flex justify-content-center py-2">
                            <Link to="/" className="text-decoration-none"><div className="btn-block pointer "><span className=" text-600 text-primary text-center ">Lihat Semua Mobil</span></div></Link>
                            </div>
                        </div>
                        <div className={Toggle ===2 ? "content active-content" : "content"}>
                            <p className="text-center my-3">No data</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
