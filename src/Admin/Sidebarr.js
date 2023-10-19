import React from 'react'
import './style.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { BsCalendar2Week, BsPersonFill, BsBookmarkStarFill, BsGraphDown, BsStack, BsPeopleFill } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";

export default function Sidebarr() {
    return (

        <div id="nav-bar" style={{ marginTop:'163px' }}>
            <input id="nav-toggle" type="checkbox" />
            <div id="nav-header">
                <div>
                <img src={logo} alt="" width='100px'/>
                </div>
                <a id="nav-title" href="#" target="_blank">
                    <i className="fab fa-codepen" />
                    RIVER'S EDGE
                </a>
                
                <hr />
            </div>
            <div id="nav-content">

                <div className="nav-button" style={{marginLeft:'55px'}}>
                    <Link to='/admin'>                        
                        <span> <BsCalendar2Week/> BOOKINGS</span>                    
                    </Link>
                </div>

                <div className="nav-button" style={{marginLeft:'55px'}}>
                    <span><BsBookmarkStarFill/>EVENTS</span>
                </div>

                <div className="nav-button" style={{marginLeft:'55px'}}>                    
                    <span><BsPersonFill/>USERS</span>
                </div>

                <hr />

                <div className="nav-button" style={{marginLeft:'55px'}}>                    
                    <span><BsGraphDown/>UTILITY</span>
                </div>

                <div className="nav-button" style={{marginLeft:'55px'}}>
                    <span><BsStack/>INVENTORY</span>
                </div>

                <div className="nav-button" style={{marginLeft:'55px'}}>
                    <span><BsPeopleFill/>EMPLOYEE</span>
                </div>

                <div className="nav-button" style={{marginLeft:'55px'}}>
                    <span><IoRestaurant/>FOOD & BEVERAGE</span>
                </div>

                <hr />

                
                
                <div id="nav-content-highlight" />
            </div>
            
            
        </div>


    )
}
