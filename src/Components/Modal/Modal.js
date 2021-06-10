import React, { Component } from 'react';
import '../../Assets/Css/style.css'
import {Cancel} from '../Asset/index'
import Swal from 'sweetalert2'

class Modal extends Component {
    onClose=()=>{
        this.props.onClose && this.props.onClose()
    }
    handleSubmit=()=>{
        Swal.fire({
            icon : 'success',
            title : 'Berhasil',
            text : 'Yay ! Booking Mobil mu akan kami proses'
        }).then((res)=>{
            if (res.isConfirmed) {
                window.location="/"
            }
        })
    }
    handleCancel=()=>{
        Swal.fire({
            icon : 'error',
            title : 'Cancel',
            text : 'Kamu telah membatalkan booking'
        }).then((res)=>{
            if (res.isConfirmed) {
                window.location=""
            }
        })
    }
    render() {
        const mobil = this.props.data
        console.log(mobil);
        const mobilType = mobil.tipe
        const hargaMobil = mobil.harga
        if(!this.props.showModal){
            return null
        }
        return (
            <div className="relative">
                <div className="Overlay">
                    <div className="Modal">
                        <div className="p-3">
                            <button onClick={this.onClose} className="btn-link"><img src={Cancel} alt="cancel"/></button>
                            <p className="text-600 fs-18 text-center">Booking Mobil</p>
                            <form action="" className="mt-2">
                                <small htmlFor="name" className="text-400">NAMA LENGKAP</small>
                                <input type="text" name="" id="" placeholder="Nama Lengkap" className="input-transparent w-100 py-2"/>
                                <hr />
                                <small htmlFor="email" className="text-400">EMAIL</small>
                                <input type="email" name="" id="" placeholder="Email" className="input-transparent w-100 py-2"/>
                                <hr />  
                                <small htmlFor="phone" className="text-400">NO HANDPHONE</small>
                                <input type="text" name="" id="" placeholder="No Handphone" className="input-transparent w-100 py-2"/>
                                <hr />
                                <br />
                                <div className="w-75">
                                    <div className="d-flex justify-content-between gap-2">
                                        <div>
                                            <small className="text-400 px-1">Mobil</small>
                                            <br />
                                            <select name="cars" id="" className="p-0 no-border">
                                                {
                                                    mobilType?.length > 0 ? (mobilType?.map((mobil,i)=>{
                                                        return(
                                                                <option key={i} data={mobil} value={mobil.name} >{mobil.name}</option>
                                                        )
                                                    })) : ("No data")
                                                }
                                            </select>
                                            <hr />
                                        </div>
                                        <div>
                                            <small className="text-400 px-1">Mobil</small>
                                            <br />
                                            <select name="cars" id="" className="p-0 no-border">
                                                {
                                                    hargaMobil?.length > 0 ? (hargaMobil?.map((mobil,i)=>{
                                                        return(
                                                            <option value={mobil.name} className="w-100">{mobil.name}</option>
                                                        )
                                                    })) : ("No data")
                                                }
                                            </select>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center gap-2 mt-3">
                                    <div className="w-100">
                                        <button className="btn-link w-100 fs-14 text-700" onClick={this.handleCancel}>cancel</button>
                                    </div>
                                    <div className="w-100">
                                        <button className="btn-primary w-100 px-3 py-2 fs-14 text-700" onClick={this.handleSubmit}>Kirim</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;