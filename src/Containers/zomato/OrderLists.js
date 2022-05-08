import React from "react";
import { Link } from "react-router-dom";
import Aux from '../../hoc/Auxillary';
import CardList from './CardList/CardList';
import { hotelsList } from './zomatoContent';
import './CardList/cardList.css';

const OrderLists = () => {
    const orderLists = Object.entries(hotelsList).map(([slug,
        {
            siteName, imgSource, ratings, cuisines, amount, offer, duration
        }]) => {
        // console.log('slug', slug, 'title: ', title);
        return (
            <div className="cardList-container" key={slug}>
                <Link to={`/zomato/${slug}`}>
                    <CardList
                        thumbSrc={imgSource}
                        name={siteName}
                        ratings={ratings}
                        cuisines={cuisines}
                        billAmount={amount}
                        offer={offer}
                        timing={duration}
                    />
                </Link>
            </div>
        )
    })


    return (
        <Aux>
            <div className="zomato-content">
                <div className="zomato-heading">Order food Online...</div>
                {orderLists}
            </div>
        </Aux>
    )
}
export default OrderLists;