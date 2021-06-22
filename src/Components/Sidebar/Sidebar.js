import React, { Component } from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render() {
        const data =[
            {
                id : 1,
                title : 'home',
                path : '/'
            },
            {
                id : 2,
                title : 'about',
                path : '/'
            },
            {
                id : 3,
                title : 'gallery',
                path : '/'
            },
            {
                id : 4,
                title : 'portfolio',
                path : '/'
            },
        ]
        return (
            <>
            {/* <div className="d-flex"> */}
                <div className="sidebar-left" >
                    {
                        data.map((x,y)=>{
                            return(
                                <div key={y} data={x}>
                                    <Link to={x.path}><button>{x.title}</button></Link>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className="">
                    <div className="card">
                        <p>content</p>
                    </div>
                </div>
            </div> */}
            </>
                
        );
    }
}

export default Sidebar;