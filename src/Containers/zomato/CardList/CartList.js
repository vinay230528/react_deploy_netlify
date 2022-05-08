import React from "react";

const CartList = ({ item, handleClick }) => {
    const { foodImg, foodName, foodAmount } = item;
    return (
        <div className="food-content" onClick={() => handleClick(item)}>
            <div className="box-20">
                <div className="thumb-sml">
                    <img src={foodImg} alt="" />
                </div>
            </div>
            <div className="box-80">
                <h2>{foodName}</h2>
                <h4>{`₹ ` + foodAmount}</h4>
            </div>
        </div>
    );
};

export default CartList;