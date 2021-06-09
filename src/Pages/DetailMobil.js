import axios from 'axios';
import React, { Component } from 'react';
import { RootDevelopment } from '../Configs/Api';
import Headers from '../Parts/Headers/Headers';
import {Link} from 'react-router-dom'
import '../Assets/Css/style.css'
import RenderCardCarousel from '../Parts/RenderCards/RenderCardCarousel';
import RenderCardAccordion from '../Parts/RenderCards/RenderCardAccordion';
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
            dataSlide : []
        }
         this.handleSlider =  this.handleSlider.bind(this)
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${RootDevelopment}/cars/${id}`).then((res)=>{
            this.setState({
                dataMobil : res.data,
                dataDefault : res.data.tipe[0].detail
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
    toggleMobil=(id,detail)=>{
        console.log(detail);
        this.setState({
            activeTabMobil : id,
            dataDetailMobil : detail
        })
    }
    handleSlider(){
        const x = this.state.dataDefault
        const y = this.state.dataDetailMobil
        const z = y === undefined
        const a = z ? x : y
        this.setState({
            dataSlide : a
        })
    }
    prevSlide(){
        const lastindex = this.state.dataSlide.length -1
        const resetIndex = this.state.index === 0
        const index = resetIndex ? lastindex : this.state.index-1
        this.setState({
            index : index
        })
    }
    nextSlide(){
        const lasindex = this.state.dataSlide.length -1
        const resetIndex = this.state.index === lasindex
        const index = resetIndex ? 0 : this.state.index+1
        this.setState({
            index : index
        })
    }
    render() {
        // window.addEventListener('scroll',()=>{
        //     this.handleSlider()
        //     const scroll = window.scrollY;
        //     const scrollable = document.documentElement.scrollHeight - window.innerHeight
        // })
        const dataMobil = this.state.dataMobil
        console.log(dataMobil);
        const tipeMobil = dataMobil.tipe
        const eksterior = dataMobil.eksterior
        const interior = dataMobil.interior
        const spesifikasi = dataMobil.spesifikasi
        const harga = dataMobil.harga
        let id = this.state.activeTabMobil
        const dataDefault = this.state.dataDefault
        console.log(dataDefault);
        const dataSlideMobil = this.state.dataDetailMobil
        const stateDataDef = !dataSlideMobil ? dataDefault : dataSlideMobil
        console.log(stateDataDef);
        const dataCabang = this.state.dataCabang
        const active = this.state.active
        const index = this.state.index
        console.log(this.state.dataSlide);
        let firstShowView = this.state.dataSlide.slice(index,index+2)
        if (firstShowView.length < 3) {
            firstShowView = firstShowView.concat(this.state.dataSlide.slice(0,2 - firstShowView.length))
        }
        
        let text = "Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter. Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7 menjadi SUV yang luar biasa di kelasnya"
        return (
            <>
            <button onClick={this.handleSlider}>cek</button>
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
                                <div className="d-flex justify-content-center gap-3" id="end">
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
                                                    <button onClick={()=>this.toggleMobil(item1.id,item1.detail)} className={id === item1.id ? " btn-link text-600 fs-12 border-active" : 'btn-link text-600 fs-12'}>{item1.name}</button>
                                                </div>
                                            )
                                        })) : ("No Data")
                                    }
                                </div>
                                <div>
                                    {
                                        stateDataDef?.length > 0 ? (stateDataDef?.map((detail,i)=>{
                                            return(
                                                <>
                                                <div data={detail} key={i}>
                                                    <img src={detail.image} alt="mobil" className="mx-auto py-3" style={{display:'block'}}/>
                                                    <p className="text-center fs-14 text-600 py-3">{detail.title}</p>
                                                </div>
                                                </>
                                            )
                                        })) : ("no data")
                                    }
                                </div>
                                <div className="d-flex justify-content-center gap-2 align-items-center py-3">
                                    {
                                        stateDataDef?.length > 0 ? (stateDataDef?.map((color,i)=>{
                                            return(
                                                <div data={color} key={i}>
                                                    <div>
                                                        <div className={id === color.id ? ` bullet-color bullet-color-active` : "bullet-color"}></div>
                                                    </div>
                                                </div>
                                            )
                                        })) : ("No data")
                                    }
                                </div>
                            </div>
                            </div>
                                <div className="bg-primary mb-2">
                                    <h5 className="fs-18 text-600 text-white text-center pt-3">Eksterior</h5>
                                    <div className="grid-container">
                                        {
                                            eksterior?.length > 0 ? (eksterior?.map((eks,i)=>{
                                                return(
                                                    <div className={eks.id===1 ? "col-12 eks-relative" : "col-6 eks-relative" }>
                                                        <img src={eks.image} alt="" style={{display:'block'}}/>
                                                        <div className="eks-overlay"></div>
                                                        <div className={eks.id === 1 ? "eks-title-1" : "eks-title-2"}>
                                                            <p className="fs-12 text-400 text-center text-white mx-3">{eks.title}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })) : ('no')
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link className="text-decoration-none">
                                            <button className="btn-block-white">Lihat Semua Eksterior</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-primary mb-2">
                                    <h5 className="fs-18 text-600 text-white text-center pt-3">Interior</h5>
                                    <div className="grid-container">
                                        {
                                            interior?.length > 0 ? (interior?.map((eks,i)=>{
                                                return(
                                                    <div className={eks.id===1 ? "col-12 eks-relative" : "col-6 eks-relative" }>
                                                        <img src={eks.image} alt="" style={{display:'block'}}/>
                                                        <div className="eks-overlay"></div>
                                                        <div className={eks.id === 1 ? "eks-title-1" : "eks-title-2"}>
                                                            <p className="fs-12 text-400 text-center text-white mx-3">{eks.title}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })) : ('no')
                                        }
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link className="text-decoration-none">
                                            <button className="btn-block-white">Lihat Semua Interior</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-white">
                                    <div className="container">
                                    <h5 className="fs-18 text-600 text-center py-3">Spesifikasi</h5>
                                    <div>
                                        {
                                            spesifikasi?.length > 0 ? (spesifikasi?.map((spek,i)=>{
                                                return <RenderCardAccordion data={spek} key={i}/>
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