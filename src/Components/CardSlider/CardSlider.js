import axios from 'axios';
import React, { Component } from 'react';
import { RootDevelopment } from '../../Configs/Api';
import {ServiceImage} from '../Asset/index'
import './slider.css'

class CardSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataImage : [],
            dataCars : {}
        }
        this.fetchDataCars = this.fetchDataCars.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){
        axios.get(`${RootDevelopment}/imageSlider`).then((res)=>{
            this.setState({
                dataImage : res.data,
            })
        }).catch(error=>{
            console.log(error);
        })
        this.fetchDataCars()
    }
    fetchDataCars=()=>{
        axios.get(`${RootDevelopment}/cars`).then((res)=>{
            this.setState({
                dataCars : res.data
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    render() {
        const imgData = this.state.dataImage
        console.log(imgData);
        return (
            <>
            <div className="container mt-4 bg-primary relative">
                <div className="slider-container" id="slideContainer">
                    <div className="slider-inner">
                        {
                            imgData?.length > 0 ? (imgData?.map((x,i)=>{
                                return(
                                    <div data={x} key={i} className="slide-img">
                                        <img src={x.image} alt="" />
                                    </div>
                                )
                            })) : ('no')
                        }
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default CardSlider;