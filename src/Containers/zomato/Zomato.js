import React from 'react';
import { Outlet } from "react-router-dom";
import Aux from '../../hoc/Auxillary';
import HeaderComponent from '../Header/Header';
import './zomato.css';
const Zomato = () => {
    return (
        <Aux>
            <HeaderComponent
                siteName="zomato"
                logoColor="#cb202d"
                linkClassName="link-zomato"
            />
            <div className="zomato-container">
                <Outlet />
            </div>
        </Aux>
    )
}
export default Zomato;