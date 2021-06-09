import React,{useState} from 'react'

export default function RenderCardAccordion(props) {
    console.log(props);
    const [Open, setOpen] = useState(false)
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center p-3 mb-2 pointer rounded box-shadow" onClick={()=>setOpen(!Open)}>
                <p className="fs-16 text-600">{props.data.title}</p>
                <span>+</span>
            </div>
            {
                Open && <div>
                    {
                        props?.data?.detail?.length > 0 ? (props?.data?.detail?.map((child,i)=>{
                            return(
                                <div data={child} key={i}>
                                    <p>{child.text}</p>
                                </div>
                            )
                        })):('no')
                    }
                </div>
            }
        </div>
    )
}
