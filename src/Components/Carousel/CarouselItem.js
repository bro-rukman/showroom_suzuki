import React, { Component } from 'react';
import {SukuCadang,ServiceImage} from '../../Components/Asset/index'

class CarouselItem extends Component {
    constructor(props){
        super(props)
        this.state={
            currentIndex : 0,
            data : [
                {
                    id : 1,
                    image : SukuCadang,
                },
                {
                    id : 2,
                    image : ServiceImage,
                },
                {
                    id : 3,
                    image : SukuCadang,
                },
                {
                    id : 4,
                    image : ServiceImage,
                },
            ],
            arrowNext : "next",
            arrowLeft : "Prev"
        }
        this.prevSlide = this.prevSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
    }
    prevSlide (){
        const lasIndex = this.state.data.length -1
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lasIndex : this.state.currentIndex-1
        this.setState({
            currentIndex : index
        })
    }
    nextSlide(){
        const lastIndex = this.state.data.length-1
        const resetIndex = this.state.currentIndex === lastIndex
        const index = resetIndex ? 0 : this.state.currentIndex+1
        this.setState({
            currentIndex : index
        })
    }
    render() {
        const index = this.state.currentIndex
        let firstShowView = this.state.data.slice(index,index+3)    
        console.log(firstShowView);
        if (firstShowView.length < 4) {
            firstShowView = firstShowView.concat(this.state.data.slice(0,3 - firstShowView.length))
        }
        return (
            <>
            <div className="relative w-375 mx-auto" >
                <div className="d-flex justify-content-center gap-2 " style={{overflow:'hidden'}}>
                    {
                        firstShowView.map((img,index)=>{
                            console.log(img);
                            return(
                                <div key={index} data={img} >
                                    <img src={img.image} alt=""/>
                                    <p>{img.id}</p>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="d-flex justify-content-center gap-3 absolute">
                    <button onClick={this.prevSlide}>{this.state.arrowLeft}</button>
                    <button onClick={this.nextSlide}>{this.state.arrowNext}</button>
                </div>
            </div>

            </>
        );
    }
}

export default CarouselItem;