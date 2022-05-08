import React from "react";
import Aux from "../../../../hoc/Auxillary";


const CourseHeader = (props) => {
    return (
        <Aux>
            <div className={'content ' + props.bgColor}  >
                <div className={'container ' + props.contentPadding}>
                    <h1 className={'intro-h1 ' + props.headingColor}>{props.cardHeading}</h1>
                    <h3 className={'intro-h3 ' + props.paraColor}>{props.cardPara}</h3>
                </div>
            </div>
        </Aux>
    )
};

export default CourseHeader;