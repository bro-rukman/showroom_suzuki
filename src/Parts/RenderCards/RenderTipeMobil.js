import React, { Component } from 'react';

class RenderTipeMobil extends Component {
    constructor(props){
        super(props)
        this.state={
            index : 0,
            next : "next",
            prev : "prev",
            dataSlide : {}
        }
        this.prevSlide = this.prevSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
    }
    // componentDidMount(){
    //     const {data} = this.props
    //     console.log(data);
    //     this.setState({
    //         dataSlide : data.detail
    //     })
        
    // }
    prevSlide(){

    }
    nextSlide(){

    }
    render() {
        const data = this.props
        console.log(data);
        this.setState({dataSlide : data})
        const dataSlide = this.state.dataSlide
        console.log(dataSlide);
        return (
            <>
                
            </>
        );
    }
}

export default RenderTipeMobil;