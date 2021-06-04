import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../../Assets/Images/Icon/menu.svg'
import Cancel from '../../Assets/Images/Icon/cancel-filled.svg'
import Logo from '../../Assets/Images/logo.png'
import '../../Assets/Css/style.css'
import Phone from '../../Assets/Images/Vector.png'
import Image12 from '../../Assets/Images/image 12.png'
import Image13 from '../../Assets/Images/image 13.png'

class Headers extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        document.getElementById('SidePanel').style.width='0px'

    }
    CloseNav=()=>{
        document.getElementById('SidePanel').style.width='0px'
    }
    OpenNav=()=>{
        document.getElementById('SidePanel').style.width='300px'
    }
    render() {
        const dataProps = this.props
        console.log(dataProps);
        return (
            <>
                <section id="navbar" className="bg-light box-shadow sticky" style={{zIndex:4}}>
                    <div className="container py-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-3">
                                <img src={Logo} alt="" style={{width:'30px'}} className="no-border bg-transparent pointer"/>
                                <div>
                                    <p className="m-0 text-600">{dataProps.data.title}</p>
                                    <p className="m-0 fs-14">{dataProps.data.subtitle}</p>
                                </div>
                            </div>
                                <img src={Hamburger} alt="menu" id="main" onClick={this.OpenNav} className="no-border bg-primary pointer" style={{padding:'8px',borderRadius:'50%'}} />
                        </div>
                    </div>
                </section>
                <section id="SidePanel" className="sidebar h-full relative box-shadow">
                    <div className="d-flex justify-content-end py-2 px-2 mx-auto">
                        <img src={Cancel} alt="menu" onClick={this.CloseNav} className="no-border bg-primary pointer" style={{padding:'8px',borderRadius:'50%'}} />
                    </div>
                    <ul className="px-3 m-0">
                        <li className="pl-10">
                            <Link to="/" className="child">Beranda</Link>
                        </li>
                        <li className="pl-10">
                            <Link to="/" className="child">Tentang Kami</Link>
                        </li>
                        <li className="pl-10">
                            <Link to="/" className="child">Mobil</Link>
                        </li>
                        <li className="pl-10">
                            <Link to="/" className="child">Service</Link>
                        </li>
                        <li className="pl-10">
                            <Link to="/" className="child">Sparepart</Link>
                        </li>
                        <li className="pl-10">
                            <Link to="/" className="child">Hubungi Kami</Link>
                        </li>
                    <hr />
                    <div className="bg-primary d-flex justify-content-center align-items-center gap-3">
                        <img src={Phone} alt="" />
                        <p className="phoneNumber">(022) 7300 723</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div>
                            <img src={Image12} alt=""  style={{width:'100%'}}/>
                        </div>
                        <div>
                            <img src={Image13} alt="" style={{width:'100%'}}/>
                        </div>
                    </div>
                    </ul>
                    <div className="px-3 v-bottom">
                        <small>&copy; 2020 Suzuki Indonesia. <br /> All rights reserved.</small>
                    </div>
                </section>
            </>
        );
    }
}

export default Headers;