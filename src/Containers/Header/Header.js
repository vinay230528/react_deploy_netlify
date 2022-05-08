import React from "react";
import Aux from "../../hoc/Auxillary";
import NavigationItem from "../../components/Navigation/NavigationItem/NavigationItem";
import "../Header/header.css";

const HeaderComponent = (props) => {
    const logoColor = {
        'color': props.logoColor
    }
    return (
        <Aux>
            <div className="header">
                <div className="box-50 logo" style={logoColor}>
                    {props.siteName}
                </div>
                <div className="box-50 txt-right">
                    <NavigationItem linkClassName={props.linkClassName} link="/">Home</NavigationItem>
                </div>
            </div>
        </Aux>
    )
}

export default HeaderComponent;