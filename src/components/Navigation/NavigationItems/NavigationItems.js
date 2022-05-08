import React from "react";
// import NavigationItem from "../NavigationItem/NavigationItem";
import { NavLink } from "react-router-dom";

const NavigationItems = (props) => {
    let alternativeClasses = [
        { id: 1, name: 'w3schools', link: '/w3shool' },
        { id: 2, name: 'zomato', link: '/zomato' }
    ];
    const navItem = alternativeClasses.map((itm, id) => {
        // console.log('alternativeClasses', itm);
        return (
            <li className={itm.name} key={itm.id}>
                <NavLink to={itm.link}>{itm.name}</NavLink>
            </li>
        )
    })
    console.log(`navItem:`, navItem);
    return (
        <ul className="">
            {navItem}
            {/* <NavigationItem link="/w3shool">W3School</NavigationItem>
            <NavigationItem link="/zomato">Zomato</NavigationItem> */}
        </ul>
    )

}

export default NavigationItems;