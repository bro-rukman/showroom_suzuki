import axios from 'axios';
import React, { Component } from 'react';
import { RootDevelopment } from '../Configs/Api';
import Footers from '../Parts/Footers/Footers';
import Headers from '../Parts/Headers/Headers';
import Tab from '../Components/Tabs/Tab';
import '../Assets/Css/style.css'
import {Link} from 'react-router-dom'
import {Whatsapp,Service,Simulasi,DaftarHarga,ServiceImage,SukuCadang} from '../Components/Asset'

class DetailOutlet extends Component {
    constructor(props){
        super(props)
        this.state={
            dataOutlet : {},
            detailOutlet : {},
            detailCarousel : [],
            currentIndex : 0,
            arrowNext : 'next',
            arrowPrev : 'prev',
        }
        this.prevSlide = this.prevSlide.bind(this)
        this.nextSlide=this.nextSlide.bind(this)
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${RootDevelopment}/dataCabang/${id}`).then((res)=>{
            console.log(res);
            this.setState({
                dataOutlet : res.data,
                detailOutlet : res.data.detail,
                detailCarousel : res.data.detail.carousel
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    prevSlide (){
        const lasIndex = this.state.detailCarousel.length -1
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lasIndex : this.state.currentIndex-1
        this.setState({
            currentIndex : index
        })
    }
    nextSlide(){
        const lastIndex = this.state.detailCarousel.length-1
        const resetIndex = this.state.currentIndex === lastIndex
        const index = resetIndex ? 0 : this.state.currentIndex+1
        this.setState({
            currentIndex : index
        })
    }
    render() {
        const index = this.state.currentIndex
        let firstShowView = this.state.detailCarousel.slice(index,index+3)    
        console.log(firstShowView);
        if (firstShowView.length < 4) {
            firstShowView = firstShowView.concat(this.state.detailCarousel.slice(0,3 - firstShowView.length))
        }
        const data = this.state.dataOutlet
        const barBottom =[
            {
                id:1,
                image : Whatsapp,
                title : "Whatsapp",
                path : "/"
            },
            {
                id:2,
                image : DaftarHarga,
                title : "Daftar Harga",
                path : "/"
            },
            {
                id:1,
                image : Service,
                title : "Pesan Service",
                path : "/"
            },
            {
                id:1,
                image : Simulasi,
                title : "Simulasi Kredit",
                path : "/"
            },
        ]
        const dataService =[
            {
                id:1,
                image : ServiceImage,
                title : "PEMESANAN SERVICE",
                text : "Tetap nyaman dan aman berkendara dengan servis rutin kendaraan Suzuki",
                text_button : "PESAN SEKARANG",
                path : "/"
            },
            {
                id:2,
                image : SukuCadang,
                title : "SUKU CADANG & AKSESORIS",
                text : "Temukan berbagai suku cadang dan aksesoris kendaraan Suzuki Anda",
                text_button : "SELENGKAPNYA",
                path : "/"
            },
        ]
        return (
            <>
                <Headers data={data}/>
                <div className="w-375 mx-auto box-shadow relative">
                        <div className="d-flex justify-content-center" style={{overflow:'hidden'}}>
                            {
                                firstShowView?.map((carousel,i)=>{
                                    console.log(carousel);
                                    return(
                                        <div data={carousel} key={i}>
                                            <div>
                                                <img src={carousel.image} alt="carousel" style={{height : '375px',display:'block'}}/>
                                            </div>
                                            <p className="text-primary text-center">{carousel.id}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="d-flex justify-content-center gap-3 my-2">
                            <button onClick={this.prevSlide} className="btn-white m-0">{this.state.arrowPrev}</button>
                            <button onClick={this.nextSlide} className="btn-white">{this.state.arrowNext}</button>
                        </div>
                    <div className="bg-primary" style={{height:'146px'}}>
                        <p className="text-600 fs-18 text-white text-center p-3 m-0" style={{paddingTop:'30px'}}>Temukan Mobil Suzuki yang <br /> tepat untuk Anda</p>
                    </div>
                    <Tab data={data}/>
                    <div className="bg-white pt-2">
                        {
                            dataService?.length > 0 ? (dataService?.map((item,i)=>{
                                return(
                                    <div data={item} key={i} className="relative">
                                        <img src={item.image} alt={item.title} style={{width:'100%',display:'block'}}/>
                                        <div className="overlay-suku-cadang">
                                            <div className="content-overlay">
                                                <div className="container text-center p-3">
                                                    <p className="fs-20 text-700 text-white py-1">{item.title}</p>
                                                    <p className="fs-14 text-400 text-white py-2">{item.text}</p>
                                                    <Link to={item.path} className="text-decoration-none"><button className="btn-block-white">{item.text_button}</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })) : ("Loading...")
                        }
                    </div>
                    <Footers data={data}/>
                    <div className="bg-primary" style={{height:'204px'}}>
                        <p className="text-300 fs-14 text-white text-center p-3 m-0" style={{paddingTop:'23px'}}>&copy; 2020 Suzuki Indonesia <br /> All rights reserved</p>
                    </div>
                    <div className="container">
                        <div className="bg-white d-flex justify-content-between align-items-center rounded-lg p-2 detail-sticky-bottom">
                            {
                                barBottom.length > 0 ? (barBottom?.map((item,i)=>{
                                    return(
                                        <div className="" data={item} key={i}>
                                            <Link to={item.path} className="text-decoration-none">
                                                <div className="card-service">
                                                    <img src={item.image} alt="" className="mx-auto " style={{display:'block'}}/>
                                                    <p className="fs-10 text-dark text-600 mt-2" style={{textAnchor:'none'}}>{item.title}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })) : ('Loading...')
                            }
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default DetailOutlet;