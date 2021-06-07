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
            detailOutlet : {}
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${RootDevelopment}/dataCabang/${id}`).then((res)=>{
            this.setState({
                dataOutlet : res.data,
                detailOutlet : res.data.detail
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    render() {
        const data = this.state.dataOutlet
        const detailOutlet = this.state.detailOutlet
        const detailCarousel = detailOutlet.carousel
        var slideIndex = 1
        showSlides(slideIndex);
        function PlusSlides(n){
            showSlides(slideIndex += n)
        }
        function currentSlide(n){
            showSlides(slideIndex=n)
        }
        function showSlides(n){
            var i;
            var slides = document.getElementsByClassName("slider")
            var dots = document.getElementsByClassName('dot')
            if (n>slides.length) {
                slideIndex = 1
            }
            if(n<1){
                slideIndex = slides.length
            }
            for (i =0;i < slides.length;i++) {
                slides[i].style.display="none"
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active","")
            }
            // slides[slideIndex-1].style.display ="block";
            // dots[slideIndex-1].className+="active"
        }
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
                {
                        detailCarousel?.map((carousel,i)=>{
                            return(
                                <div data={carousel} key={i}>
                                    <img src={carousel.image} alt="carousel" style={{width:'100%',display:'block'}}/>
                                </div>
                            )
                        })
                    }
                    {/* <div>
                        <div className="slide-container">
                            <div className="slider fade">
                                <img src={CarouselImage} alt="" style={{width:'100%'}}/>
                            </div>
                            <div className="slider fade">
                                <img src={CarouselImage} alt="" style={{width:'100%'}}/>
                            </div>
                            <div className="slider fade">
                                <img src={CarouselImage} alt="" style={{width:'100%'}}/>
                            </div>
                            <a className="prev" onClick={PlusSlides(-1)}>&#10094;</a>
                            <a className="next" onClick={PlusSlides(1)}>&#10095;</a>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <span className="dot" onClick={currentSlide(1)}></span>
                            <span className="dot" onClick={currentSlide(2)}></span>
                            <span className="dot" onClick={currentSlide(3)}></span>
                        </div>
                    </div> */}
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