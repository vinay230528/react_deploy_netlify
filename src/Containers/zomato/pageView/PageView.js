import React, { useEffect, useState } from "react";
import Aux from "../../../hoc/Auxillary";
import { useParams } from "react-router-dom";
import { hotelsList } from '../zomatoContent';
import HorizontalSidebar from '../../../components/UI/Sidebar/Horizontal/HorizontalSidebar';
import CartList from "../CardList/CartList";
import './pageview.css';

const PageView = (props) => {
    const [horizontalSidebarToggle, updatehorizontalSidebarToggle] = useState(false);
    const [cart, setCart] = useState([]);

    const { slug } = useParams();
    const orderDetails = hotelsList[slug];
    const {
        siteName, menu, cuisines, address, openhours,
        ratings, reviews,
    } = orderDetails;

    const list = Array.from(menu);
    // console.log('list: ', list);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
        if (horizontalSidebarToggle !== true) {
            updatehorizontalSidebarToggle(true);
        }
        // console.log('item: ', item, cart);
    };

    const handleChange = (item, count) => {
        const foodIndex = cart.indexOf(item);
        const foodList = cart;
        foodList[foodIndex].quantity += count;

        if (foodList[foodIndex].quantity === 0) {
            foodList[foodIndex].quantity = 1;
        }
        setCart([...foodList]);
    };

    const closeHorizontalSidebarHandler = () => {
        setCart([]);
        updatehorizontalSidebarToggle(false);
    }

    useEffect(() => {
        console.log('Order list is updated', horizontalSidebarToggle);
    }, [horizontalSidebarToggle]);

    return (
        <Aux>
            <HorizontalSidebar
                open={horizontalSidebarToggle}
                close={closeHorizontalSidebarHandler}
                cart={cart} setCart={setCart} handleChange={handleChange}
            />
            <div className="pageview">
                <div className="header-img">
                    <div className="box-60 text-left">
                        <h1>{siteName}</h1>
                        <h4>{cuisines}</h4>
                        <h4>{address}</h4>
                        <h3><span>{`Opening Hours : `}</span>{openhours}</h3>

                    </div>
                    <div className="box-40 text-right" style={{ 'alignSelf': 'flex-end' }}>
                        <span className="delivery-ratings">{ratings}</span>
                        <span className="review"><b>{reviews}</b>{`Delivery Reviews`}</span>
                    </div>
                </div>
                <div className="zomato-content">
                    <div className="zomato-heading">Order Online</div>
                    <div className="food-items">
                        {/* {menuList} */}
                        {list.map((item) => (
                            <CartList key={item.id} item={item} handleClick={handleClick} />
                        ))}
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default PageView;