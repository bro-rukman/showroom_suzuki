import React,{useState} from 'react'
import './Tabs.css'
import RenderCardMobil from '../../Parts/RenderCards/RenderCardMobil'

export default function Tab(props) {
    console.log(props);
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
                        </div>
                        <div className={Toggle ===2 ? "content active-content" : "content"}>
                            <h2>content2</h2>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque optio, excepturi et deleniti officia nisi nostrum, praesentium dicta dolore possimus nihil odit. Fuga, qui eius?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
