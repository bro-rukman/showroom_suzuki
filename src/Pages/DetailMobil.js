import axios from 'axios';
import React, { Component } from 'react';
import { RootDevelopment } from '../Configs/Api';
import Headers from '../Parts/Headers/Headers';
import {Link} from 'react-router-dom'
import '../Assets/Css/style.css'
import RenderCardCarousel from '../Parts/RenderCards/RenderCardCarousel';
import RenderTipeMobil from '../Parts/RenderCards/RenderTipeMobil';

import {Gear} from '../Components/Asset/index'
import { func } from 'prop-types';

class DetailMobil extends Component {
    constructor(props){
        super(props)
        this.state={
            dataMobil : {},
            dataCabang : {},
            active : 1,
            activeTabMobil : 1,
            dataDefault : {},
            dataDetailMobil : undefined,
            // carousel
            next : 'next',
            prev : 'prev',
            index : 0,
            dataSlide : {}
        }
         this.dataSlider =  this.dataSlider.bind(this)
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${RootDevelopment}/cars/${id}`).then((res)=>{
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
        this.setState({
            activeTabMobil : id,
            dataDetailMobil : item1
        })
    }
    async dataSlider(){
        const a = await this.state.dataDefault
        const b = await this.state.dataDetailMobil
        const c = b === undefined ? a : b
        console.log(c);
        this.setState({
            dataSlide : c
        })
    }
    render() {
        const dataMobil = this.state.dataMobil
        const tipeMobil = dataMobil.tipe
        let id = this.state.activeTabMobil
        const dataDefault = this.state.dataDefault
        console.log(dataDefault);
        const dataDefaultMobil = this.state.dataDetailMobil
        console.log(dataDefaultMobil);
        const dataDef = !dataDefaultMobil ?  dataDefault : dataDefaultMobil
        console.log(dataDef);
        const dataCabang = this.state.dataCabang
        const active = this.state.active
        const slide = this.state.dataSlide
        console.log(slide);
        function prevSlide(){
            const lastindex = dataDef.detail.length -1
            const resetIndex = this.state.index === 0
            const index = resetIndex ? lastindex : this.state.index-1
            this.setState({
                index : index
            })
        }
        function nextSlide(){
            const lasindex = dataDef.detail.length -1
            const resetIndex = this.state.index === lasindex
            const index = resetIndex ? 0 : this.state.index+1
            this.setState({
                index : index
            })
        }
        const index = this.state.index
        // let firstShowView = dd.slice(index,index+3)
        // console.log(firstShowView);
        let text = "Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya"
        return (
            <>
            {/* {
                dd.map((it,i)=>{
                    console.log(it);
                })
            } */}
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
                                    return( <RenderCardCarousel data={item} key={i}/>
                                    )
                                })) : ("No data")
                            }
                        </div>
                        <div className="bg-primary">
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
                                    {
                                        tipeMobil?.length > 0 ? (tipeMobil?.map((item1,i)=>{
                                            return(
                                                <div className="mb-2" key={i} data={item1}>
                                                    <button onClick={()=>this.toggleMobil(item1.id,item1)} className={id === item1.id ? " btn-link text-600 fs-12 border-active" : 'btn-link text-600 fs-12'}>{item1.name}</button>
                                                </div>
                                            )
                                        })) : ("No Data")
                                    }
                                </div>
                                <div className="d-flex">
                                    {
                                        dataDef?.detail?.length > 0 ? (dataDef?.detail?.map((detail,i)=>{
                                            return(
                                                <>
                                                <div>
                                                    <img src={detail.image} alt="mobil" style={{display:'block'}}/>
                                                    <div data={detail} key={i}>{detail.title}</div>
                                                </div>
                                                </>
                                            )
                                        })) : ("no data")
                                    }
                                </div>
                                <div className="d-flex justify-content-center gap-2 align-items-center">
                                    {
                                        dataDef?.detail?.length > 0 ? (dataDef?.detail?.map((color,i)=>{
                                            return(
                                                <div data={color} key={i}>
                                                    <div>
                                                        <span className={id === color.id ? ` bullet-color bullet-color-active` : "bullet-color"}>o</span>
                                                    </div>
                                                </div>
                                            )
                                        })) : ("No data")
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