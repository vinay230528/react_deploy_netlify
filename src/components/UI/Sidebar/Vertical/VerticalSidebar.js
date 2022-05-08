import React from "react";
import Aux from "../../../../hoc/Auxillary";
import "../Vertical/VerticalSidebar.css";
import { FaTimes } from "react-icons/fa";

const VerticalSidebar = (props) => {
    console.log(props);
    let attachedClass = ['sidedrawer', 'close'];

    if (props.open) {
        attachedClass = ['sidedrawer', 'open'];
    }
    const listItems = props.courseList.map((itm, ind) => {
        return (
            <div className="sidedrawer-content" key={itm.id}>
                <div className="box-50 txt-left list-padding">
                    {/* <span>{ind + 1 + `i] `}</span> */}
                    <span className="span">{itm.name}</span>
                </div>
                <div className="box-50 txt-right list-padding">
                    <span className="span">{itm.amount}</span>
                </div>
            </div>
        )
    });
    console.log('listItems', listItems);
    return (
        <Aux className="sidedrawer-content">
            <div className={attachedClass.join(' ')}>
                <div className="sidedrawer-content border-bottom bg-light">
                    <div className="box-50"><h1>Courses</h1></div>
                    <div className="box-50 txt-right">
                        <FaTimes onClick={props.close} className="icon-close" />
                    </div>
                </div>
                {listItems}
                <div className="subTotal-content">
                    <div className="sidedrawer-content">
                        <div className="box-50 txt-right list-padding"><span>Total:</span></div>
                        <div className="box-50 txt-right list-padding">
                            <span className="subTotal">{`₹ ` + props.courseSubTotal}</span>
                        </div>
                    </div>
                    <button className="btn-addToCart" onClick={props.btnSubmit}>Submit</button>
                </div>
            </div>
        </Aux>
    )
}

export default VerticalSidebar;