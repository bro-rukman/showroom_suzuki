import axios from 'axios';
import React, { Component } from 'react';
import { RootDevelopment } from '../Configs/Api';
import Headers from '../Parts/Headers/Headers';
import {Link} from 'react-router-dom'
import '../Assets/Css/style.css'
import RenderCardCarousel from '../Parts/RenderCards/RenderCardCarousel';
import RenderTipeMobil from '../Parts/RenderCards/RenderTipeMobil';

import {Gear} from '../Components/Asset/index'

class DetailMobil extends Component {
    constructor(props){
        super(props)
        this.state={
            dataMobil : {},
            dataCabang : {},
            active : 1,
            activeTabMobil : 1,
            dataDefault : {},
            dataDetailMobil : undefined
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${RootDevelopment}/cars/${id}`).then((res)=>{
            console.log(res);
            this.setState({
                dataMobil : res.data,
                dataDefault : res.data.tipe[0]
            })
        }).catch(error=>{
            console.log(error);
        })
        this.fetchDataCabang()
    }
    fetchDataCabang=()=>{
        axios.get(`${RootDevelopment}/dataCabang`).then((res)=>{
            this.setState({
                dataCabang : res.data[2]
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    toggleTab=(id)=>{
        this.setState({
            active : id
        })
    }
    toggleMobil=(id,item1)=>{
        // this.state.activeTabMobil === id ? 
        this.setState({
            activeTabMobil : id,
            dataDetailMobil : item1
        })
    }
    render() {
        const dataMobil = this.state.dataMobil
        console.log(dataMobil);
        const tipeMobil = dataMobil.tipe
        console.log(tipeMobil);
        let id = this.state.activeTabMobil
        const dataDefault = this.state.dataDefault
        console.log(dataDefault);
        const dataDefaultMobil = this.state.dataDetailMobil
        console.log(dataDefaultMobil);
        const dataDef = !dataDefaultMobil ?  dataDefault : dataDefaultMobil
        console.log(dataDef);
        const dataCabang = this.state.dataCabang
        console.log(dataCabang);
        const active = this.state.active
        let text = "Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya"
        return (
            <>
                <Headers data={dataCabang}/>
                <div className="w-375 mx-auto box-shadow">
                    <div className="container">
                        <p className="text-700 fs-16 py-2">{dataMobil.title}</p>
                    </div>
                        <hr className="dotted mb-2"/>
                        <ul className="carousel-menu">
                            {
                                dataMobil?.menu?.length > 0 ? (dataMobil?.menu?.map((item,index)=>{
                                    return(
                                        <li data={item} key={index}>
                                            <Link to={item.path} className="text-decoration-none" ><button style={{whiteSpace:'nowrap',cursor:'pointer'}} onClick={()=>this.toggleTab(item.id)} className={item.id === active ? " no-border bg-transparent px-3 py-2 bg-primary text-white" : " no-border bg-transparent px-3 py-2"}>{item.title}</button></Link>
                                        </li>
                                    )
                                })) : ("my-3 no-border bg-transparent px-3 py-2")
                            }
                        </ul>
                        <div className="carousel-card">
                            {
                                dataMobil?.carousel?.length > 0 ? (dataMobil?.carousel?.map((item,i)=>{
                                    console.log(item);
                                    return( <RenderCardCarousel data={item} key={i}/>
                                    )
                                })) : ("No data")
                            }
                        </div>
                        <div className="bg-primary mb-3">
                            <div className="w-85 mx-auto py-2">
                                <img src={Gear} alt="" style={{width:'100%',display:'block'}}/>
                                <p className="text-center text-white fs-14 text-400 py-2">{text}</p>
                                <hr className="my-3"/>
                                <div className="d-flex justify-content-center gap-3">
                                    <Link className="text-decoration-none">
                                        <button className="btn-block-white">UNDUH BROSUR</button>
                                    </Link>
                                    <Link className="text-decoration-none">
                                        <button className="btn-white">HARGA</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="container">
                                <p className="text-600 fs-18 text-center py-3">Tipe & Warna</p>
                                <div className="my-2 d-flex justify-content-center gap-2">
                                    {/* <RenderTipeMobil data={tipeMobil}/> */}

                                    {
                                        tipeMobil?.length > 0 ? (tipeMobil?.map((item1,i)=>{
                                            return(
                                                <button key={i} data={item1} onClick={()=>this.toggleMobil(item1.id,item1)}>{item1.name}</button>
                                            )
                                        })) : ("No Data")
                                    }
                                </div>
                                <div>
                                    {
                                        dataDef?.detail?.length > 0 ? (dataDef?.detail?.map((detail,i)=>{
                                            return(
                                                <div data={detail} key={i}>{detail.title}</div>
                                            )
                                        })) : ("no")
                                    }
                                </div>
                            </div>
                        </div>
                </div>
            </>
        );
    }
}

export default DetailMobil;