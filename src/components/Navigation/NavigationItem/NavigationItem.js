import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => (
    <li className="link-primary" >
        <NavLink
            className={props.linkClassName}
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
    </li>
)

export default NavigationItem;