import React from "react";
import Aux from "../../../hoc/Auxillary";
import { useNavigate } from "react-router-dom";
import '../ThanksCard/greet.css';

const ThankYou = (props) => {
    const goTohome = useNavigate();
    const navigateTohome = () => {
        goTohome('/');
    }
    return (
        <Aux>
            <div className="greetContainer">
                <div className="box-50">
                    <h1>Thank You!</h1>
                    <p>your order has been successfully completed! </p>
                </div>
                <div className="box-50 greet-img"></div>
                <div className="box-100">
                    <button onClick={navigateTohome}>Go to home</button>
                </div>
            </div>
        </Aux>
    )
}

export default ThankYou;