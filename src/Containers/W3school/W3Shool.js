import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aux from '../../hoc/Auxillary';
import HeaderComponent from '../Header/Header';
import CourseCard from '../../components/UI/Card/CardBig/CardBig';
import CourseHeader from '../../components/UI/Card/CardBig/cardHeader';
import SideDrawer from "../../components/UI/Sidebar/Vertical/VerticalSidebar";
import { examplePython, exampleJavascript, exampleCSS, exampleHTML } from '../W3school/CodeContent';
import axios from 'axios';


const W3Shool = (props) => {
    const [courseList, updateCourseList] = useState([]);
    const [sidebarToggle, updateSidebarToggle] = useState(false);
    const [disabledHTMLBtn, setdisabledHTMLBtn] = useState(false);
    const [disabledCSSBtn, setdisabledCSSBtn] = useState(false);
    const [disabledJSBtn, setdisabledJSBtn] = useState(false);
    const [disabledPYTHONBtn, setdisabledPYTHONBtn] = useState(false);


    const btnHTML = () => {
        // event.preventDefault();
        // alert('HTML btn is clicked!');
        updateCourseList((prevState) => [
            ...prevState,
            { id: 1, name: 'HTML', amount: 1000 }
        ]);
        if (setdisabledHTMLBtn !== true) {
            setdisabledHTMLBtn(true);
            console.log(`btn is disabled`)
        }

        if (sidebarToggle !== true) {
            updateSidebarToggle(true);
        }
    }

    const btnCSS = () => {
        // alert('CSS btn is clicked!');
        updateCourseList((prevState) => [
            ...prevState,
            { id: 2, name: 'CSS', amount: 1500 }
        ]);
        if (sidebarToggle !== true) {
            updateSidebarToggle(true);
        }
        if (disabledCSSBtn !== true) {
            setdisabledCSSBtn(true);
        }
    }

    const btnJavascript = () => {
        // alert('Javascript btn is clicked!');
        updateCourseList((prevState) => [
            ...prevState,
            { id: 3, name: 'JavaScript', amount: 3500 }
        ]);
        if (sidebarToggle !== true) {
            updateSidebarToggle(true);
        }
        if (disabledJSBtn !== true) {
            setdisabledJSBtn(true);
        }
    }

    const btnPython = () => {
        // alert('Python btn is clicked!');
        updateCourseList((prevState) => [
            ...prevState,
            { id: 4, name: 'Python', amount: 6000 }
        ]);
        if (sidebarToggle !== true) {
            updateSidebarToggle(true);
        }
        if (disabledPYTHONBtn !== true) {
            setdisabledPYTHONBtn(true);
        }
    }

    let courseSubTotal = 0;
    courseList.forEach(element => {
        courseSubTotal += element.amount;
    });

    const sidebarCloseHandler = () => {
        updateSidebarToggle(false);
        setdisabledHTMLBtn(false);
        setdisabledCSSBtn(false);
        setdisabledJSBtn(false);
        setdisabledPYTHONBtn(false);
        updateCourseList([]);
    }
    console.log('subTotal: ', courseSubTotal,
        `sidebarToggle: `, sidebarToggle,
        `disabled: `, disabledCSSBtn, disabledHTMLBtn,
        `courseList: `, courseList);

    useEffect(() => {
        console.log('w3school is mount');
    }, [courseList, sidebarToggle, disabledCSSBtn, disabledHTMLBtn]);

    const navigate = useNavigate();
    const btnSubmitHandler = () => {
        let message = `Your selected courses : \n`;
        courseList.forEach(ele => {
            message += `\t ${ele.name} :  ${ele.amount}  \n`;
        });

        message += `\n Total: ₹ ${courseSubTotal}`;
        // console.log(message);

        const url = 'https://jsonplaceholder.typicode.com/posts';
        let course_data = {
            ...courseList,
            total: courseSubTotal
        };
        if (window.confirm(message)) {
            axios
                .post(url, course_data)
                .then((result) => console.log('result: ', result))
                .catch((err) => console.log(err));
            navigate('/greetComponent');
        }
    }

    return (
        <Aux>
            <SideDrawer
                open={sidebarToggle}
                close={sidebarCloseHandler}
                courseList={courseList}
                btnSubmit={btnSubmitHandler}
                courseSubTotal={courseSubTotal}
            />
            <HeaderComponent
                siteName="w3schools"
                logoColor="#4CAF50"
                linkClassName="link-w3shools"
            />

            <CourseHeader
                bgColor="bg-black"
                headingColor="txt-white"
                paraColor="txt-pink"
                contentPadding="intro-padding txt-center"
                cardHeading="Learn to Code"
                cardPara="With the world's largest web developer site"
                btnName="Find"
                clicked={''}
            />
            <CourseCard
                bgColor="bg-light-green"
                headingColor="txt-black"
                paraColor="txt-black"
                contentPadding="content-padding"
                cardHeading="HTML"
                cardPara="The language for building web pages"
                btnName="Learn HTML"
                clicked={btnHTML}
                codeCaption="HTML Example:"
                codeContent={exampleHTML}
                disabled={disabledHTMLBtn}
            />
            <CourseCard
                bgColor="bg-yellow"
                headingColor="txt-black"
                paraColor="txt-black"
                contentPadding="content-padding"
                cardHeading="CSS"
                cardPara="The language for styling web pages"
                btnName="Learn CSS"
                clicked={btnCSS}
                codeCaption="CSS Example:"
                codeContent={exampleCSS}
                disabled={disabledCSSBtn}
            />
            <CourseCard
                bgColor="bg-black"
                headingColor="txt-white"
                paraColor="txt-white"
                contentPadding="content-padding"
                cardHeading="JavaScript"
                cardPara="The language for programming web pages"
                btnName="Learn Javascript"
                clicked={btnJavascript}
                codeCaption="Javascript Example:"
                codeContent={exampleJavascript}
                disabled={disabledJSBtn}
            />
            <CourseCard
                bgColor="bg-light-pink"
                headingColor="txt-black"
                paraColor="txt-black"
                contentPadding="content-padding"
                cardHeading="Python"
                cardPara="A popular programming language"
                btnName="Learn Python"
                clicked={btnPython}
                codeCaption="Python Example:"
                codeContent={examplePython}
                disabled={disabledPYTHONBtn}
            />
        </Aux>
    )
}
export default W3Shool;