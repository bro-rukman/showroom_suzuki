import React, { Component } from 'react';
import Modal from 'react-modal'
import '../../Assets/Css/style.css'


class ModalBooking extends Component {
    constructor(props){
        super(props)
        this.state={
            data : {},
            showModal : false
        }
    }
    handleOpen=()=>{
        this.setState({
            showModal:true
        })
    }
    handleClose=()=>{
        this.setState({
            showModal:false
        })
    }
    render() {
        return (
            <>

            <button onClick={this.handleOpen}>showmodal</button>
                <Modal 
                isOpen={this.state.showModal}
                className="Modal"
                overlayClassName="Overlay"
                >
                    <div>
                        <button onClick={this.handleClose}>&times;</button>
                    </div>
                    <h5>Modal show</h5>
                </Modal>
            </>
        );
    }
}

export default ModalBooking;