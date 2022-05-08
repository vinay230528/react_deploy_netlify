import React from "react";
import Aux from "../../../hoc/Auxillary";
import './cardList.css';

const CardList = (props) => {
    const {
        thumbSrc, name, ratings, cuisines, billAmount, offer, timing
    } = props;

    return (
        <Aux>
            <div className="thumbs-mdl">
                <img src={thumbSrc} alt={name} />
                <span className="timing">{timing}</span>
                {(offer !== ' ') ? <span className="offer">{offer + ` Off`}</span> : ' '}

            </div>
            <div className="card-summary">
                <h3>{name}</h3>
                <span className="ratings">{ratings + ` `}</span>
                <h4>{cuisines}</h4>
                <span className="amount">{billAmount + ` for one`}</span>
            </div>
        </Aux>
    )
}

export default CardList;