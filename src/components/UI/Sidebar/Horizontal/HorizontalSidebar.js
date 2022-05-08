import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aux from "../../../../hoc/Auxillary";
import axios from "axios";
import './HorizontalSidebar.css';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const HorizontalSidebar = ({ cart, setCart, handleChange, open, close }) => {
    const [orderListToggle, updateOrderListToggle] = useState(false);
    const [subTotal, setSubTotal] = useState(0);

    let joinClasses = ['horizontal-sidebar', 'close-sidebar'];
    if (open) {
        joinClasses = ['horizontal-sidebar', 'open-sidebar'];
    }

    const handleRemove = (id) => {
        const orderedList = cart.filter((item) => item.id !== id);
        setCart(orderedList);
        handleSubTotal();
    };

    const handleSubTotal = () => {
        let billAmount = 0;
        cart.map((item) => (billAmount += item.quantity * item.foodAmount));
        setSubTotal(billAmount);
    };

    const orderSummary = cart.map((item) => {
        return (
            <div className="items" key={item.id}>
                <div className="box-40 txt-left">
                    <img src={item.foodImg} alt={item.foodName} />
                    <span className="title">{item.foodName}</span>
                </div>
                <div className="box-15 txt-center">
                    {`₹ ` + item.foodAmount}
                </div>
                <div className="box-15 txt-center">
                    <div>
                        <button onClick={() => handleChange(item, -1)} className="remove">-</button>
                        <button>{item.quantity}</button>
                        <button onClick={() => handleChange(item, 1)} className="add">+</button>
                    </div>
                </div>
                <div className="box-15 txt-center">
                    {`₹ ` + item.foodAmount * item.quantity}
                </div>
                <div className="box-15 txt-left">
                    <FaRegTrashAlt className="icon-delete" onClick={() => handleRemove(item.id)} />
                </div>

            </div>
        )
    });

    const showOrderItemsToggle = () => {
        updateOrderListToggle(prevState => !prevState);
    }

    const navigate = useNavigate();
    const postOrders = () => {
        let message = `Your selected orders : \n`;
        cart.forEach(ele => {
            message += `\t ${ele.foodName} : ₹  ${ele.foodAmount}  Qty: (${ele.quantity})  Price:  ₹ ${ele.foodAmount * ele.quantity} \n`;
        });
        message += `\n Total:  ₹  ${subTotal}`;
        // console.log(message);
        const url = 'https://jsonplaceholder.typicode.com/posts';
        let list_data = {
            ...cart,
            total: subTotal
        };
        if (window.confirm(message)) {
            axios
                .post(url, list_data)
                .then((result) => console.log('result: ', result))
                .catch((err) => console.log(err));
            setCart([]);
            navigate('/greetComponent');
        }
    }
    useEffect(() => {
        handleSubTotal();
    });

    useEffect(() => {
        console.log('Horizontal sidebar is updated!');
    }, [orderListToggle]);

    return (
        <Aux>
            <div className={joinClasses.join(' ')}>
                <div className="sidebar-header-content">
                    {
                        (orderListToggle !== false)
                            ? <span className="sidbar-title">Your Order List...</span>
                            : ""
                    }

                    <span className="sidebar-btn-updown" onClick={showOrderItemsToggle}>
                        {(orderListToggle !== false)
                            ? <FaArrowDown />
                            : <FaArrowUp />
                        }
                    </span>
                </div>
                <div className="orderList-content">
                    {(orderListToggle !== false) ? orderSummary : ' '}
                </div>
                <div className="footer-content">
                    <button onClick={close} className="close">Close</button>
                    <div className="subtotal">Total: <span>{`  ₹ ` + subTotal}</span></div>
                    <button onClick={() => postOrders()}>Submit</button>
                </div>
            </div>
        </Aux>
    )
}

export default HorizontalSidebar;