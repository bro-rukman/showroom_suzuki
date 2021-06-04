import axios from 'axios';
import React, { Component } from 'react';
import Headers from '../Parts/Headers/Headers';
import {RootDevelopment} from '../Configs/Api/index'
import RenderCardCabang from '../Parts/RenderCards/RenderCardCabang';
import RenderCardPromo from '../Parts/RenderCards/RenderCardPromo';
import Footers from '../Parts/Footers/Footers';

class Homepage extends Component {
    constructor(props){
        super(props)
        this.state ={
            dataDealer : {},
            dataPromo : {},
            dataPage : {},
            dataDealer1 : {}
        }
    }
    componentDidMount(){
        axios.get(`${RootDevelopment}/dataCabang`).then((res)=>{
            this.setState({
                dataDealer : res.data,
                dataDealer1 : res.data[0]

            })
        }).catch(error=>{
            console.log(error);
        })

        this.fetchPromo()
    }
    fetchPromo=()=>{
        axios.get(`${RootDevelopment}/dataPromo`).then((res)=>{
            this.setState({
                dataPromo : res.data
            })
        }).catch(error=>{
            console.log(error);
        })
    }
    render() {
        const data = this.state.dataDealer
        const dataSlice = this.state.dataDealer1;
        const dataPromo = this.state.dataPromo
        return (
            <>
                <Headers data={dataSlice}/>
                <div className="w-375 mx-auto box-shadow">
                    <div className="bg-light">
                        <div className="bg-primary" style={{height:'211px'}}>
                            <p className="text-600 text-white text-center p-3 m-0" style={{paddingTop:'50px',fontSize:'18px'}}>Temukan Outlet Suzuki terdekat didaerah sekitar Anda </p>
                        </div>
                    <div className="container" style={{marginTop:'-80px'}}>
                            {
                                data?.length > 0 ? (data?.map((item,index)=>{
                                    return(
                                        <RenderCardCabang key={index} data={item}/>
                                    )
                                })) : ( <div><p className="text-center">Loading...</p></div>)
                            }
                    </div>
                    <div className="bg-primary" style={{height:'153px'}}>
                        <p className="text-600 text-white text-center p-3 m-0" style={{paddingTop:'40px',fontSize:'18px'}}>Informasi Terbaru </p>
                        <p className="text-white text-center m-0" style={{fontSize:'13px',fontWeight:400}}>Seputer Promo, Berita, Event dari Suzuki</p>
                    </div>
                    <div className="container" style={{marginTop:'-40px'}}>
                            {
                                dataPromo?.length > 0 ? (dataPromo?.map((item1,index1)=>{
                                    return(
                                        <RenderCardPromo data={item1} key={index1}/>
                                    )
                                })) : (<div><p className="text-center">Loading...</p></div>)
                            }
                            <div className="d-flex justify-content-center">
                                <p className="text-center pointer border px-3 py-2 btn-block m-0"><span className="text-primary">Lihat Semua Informasi</span></p>
                            </div>
                    </div>
                    </div>
                    <Footers data={dataSlice}/>
                </div>
            </>
        );
    }
}

export default Homepage;