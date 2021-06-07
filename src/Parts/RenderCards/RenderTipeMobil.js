import axios from 'axios';
import React,{useState} from 'react'
import { RootDevelopment } from '../../Configs/Api';

export default function RenderTipeMobil(props) {
    console.log(props);
    const DataDefault = props.data
    console.log(DataDefault);
    // const dataDef = DataDefault.splice(0,1)
    const [toggle, settoggle] = useState(1)
    const [Data, setData] = useState(undefined)
    function tabClick(i,item){
        settoggle(i)
        setData(item)
    }
    console.log(Data);
    console.log(toggle);
    return (
        <>
            <div>
                {
                    props?.data?.length > 0 ? (props?.data?.map((item,i)=>{
                        console.log(item);
                        return(
                            <>
                            <div style={{display:'inline-block'}}>
                                <button data={item} key={i} onClick={()=>tabClick(i+1,item)}>{item.name}</button>
                            </div>
                            </>
                        )
                    })) : ('no')
                }
            </div>
            <div>
                {
                    // Data.detail.length > 0 ? ('ya'):('no')
                }
            </div>
        </>
    )
}
