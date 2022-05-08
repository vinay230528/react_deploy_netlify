import React from "react";
import Aux from '../../../../hoc/Auxillary';
import '../CardBig/card.css';

const CardBig = (props) => {
    const classes = [];
    // const [btnDisabled, setBtnDisabled] = useState(false);

    const onClickHandler = () => {
        console.log('btn clicked');
        console.log(`isBtnActive: `, props.isBtnActive);
        props.clicked();
    };

    if (props.disabled !== true) {
        classes.push('bg-dark-green', 'txt-white');
    } else {
        classes.push('bg-disabled', 'txt-disabled');
    }


    return (
        <Aux>
            <div className={'content ' + props.bgColor}  >
                <div className={'container ' + props.contentPadding}>
                    <div className="course-content">
                        <div className="box-50 txt-center">
                            <h1 className={'course-h1 ' + props.headingColor}>{props.cardHeading}</h1>
                            <p className={'course-p ' + props.paraColor}>{props.cardPara}</p>
                            <button
                                type="button"
                                className={'button btn-large ' + classes.join(' ')}
                                onClick={onClickHandler}
                                disabled={props.disabled}
                            >{props.btnName}</button>
                        </div>
                        <div className="box-50">
                            <div className="code bg-grey">
                                <h3>{props.codeCaption}</h3>
                                <div className="code-box">
                                    {props.codeContent}
                                </div>
                                <button type="button" className="button btn-large bg-dark-green txt-white">Try it Yourself</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default CardBig;