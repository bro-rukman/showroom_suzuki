import React,{useState} from 'react'
import {Down,Up} from '../../Components/Asset/index'
import { FormatHarga } from '../../Configs/FormatHarga/FormatHarga'

export default function RenderCardAccordion(props) {
    const [Open, setOpen] = useState(false)
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center p-3 mb-2 pointer rounded box-shadow bg-light" onClick={()=>setOpen(!Open)}>
                <p className="fs-16 text-600">{props.data.title}</p>
                <span><img src={Open ? Up : Down} alt="" style={{display:'block'}}/></span>
            </div>
            {
                Open && <div className="border box-shadow" style={{marginTop:'-10px',marginBottom:'10px'}}>
                    {
                        props?.data?.detail?.length > 0 ? (props?.data?.detail?.map((child,i)=>{
                            return(
                                <div data={child} key={i} className="p-3 bg-white rounded d-flex justify-content-between">
                                    <p className="fs-14 text-600">{child.text}</p>
                                    <p className="fs-14 text-400">{FormatHarga(child.size)}{" "}{child.satuan}</p>
                                </div>
                            )
                        })):('no')
                    }
                </div>
            }
        </div>
    )
}
