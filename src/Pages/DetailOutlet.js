import axios from 'axios';
import React, { Component } from 'react';
import { RootDevelopment } from '../Configs/Api';
import Footers from '../Parts/Footers/Footers';
import Headers from '../Parts/Headers/Headers';
import CarouselImage from '../Assets/Images/carousel1.png'
import Slider from 'react-slick'
import Tabs from '../Components/Tabs/Tabs';
import Tab from '../Components/Tabs/Tab';
// import {Tab} from '../Components/Tabs/Tab'

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
        console.log(data);
        const detailOutlet = this.state.detailOutlet
        console.log(detailOutlet);
        const detailCars = detailOutlet.cars
        console.log(detailCars);
        const detailCarousel = detailOutlet.carousel
        console.log(detailCarousel);
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
        return (
            <>
                <Headers data={data}/>
                <div className="w-375 mx-auto box-shadow relative">
                {
                        detailCarousel?.map((carousel,i)=>{
                            return(
                                <div data={carousel} key={i}>
                                    <img src={carousel.image} alt="carousel" style={{width:'100%'}}/>
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
                    <div className="bg-primary" style={{height:'146px',marginTop:'-5px'}}>
                        <p className="text-600 fs-18 text-white text-center p-3 m-0" style={{paddingTop:'30px'}}>Temukan Mobil Suzuki yang <br /> tepat untuk Anda</p>
                    </div>
                    <Tab data={data}/>
                    <Footers data={data}/>
                    
                </div>
            </>
        );
    }
}

export default DetailOutlet;