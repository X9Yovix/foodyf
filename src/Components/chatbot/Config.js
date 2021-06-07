import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Redirect } from 'react-router-dom';
import './Config.css';
import avatar from "../../assets/robot.png";
/* import avatar from "../../assets/kuro.png"; */
function CustomChatbot() {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    /* const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#67a9ff",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#67a9ff",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        botBubbleImage:'red',
        userFontColor: "#4c4c4c"
    }; */
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Arial, Helvetica, sans-serif',
        headerBgColor: '#67a9ff',
        headerFontColor: '#fff',
        headerFontSize: '20px',
        botBubbleColor: '#59d2d9',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    /* const speechSynthesis ={ enable: true, lang: 'en', voice: null } */
    const steps =
        [
            {
                id: '1',
                message: "Hi customer, I'm here to help. What do you need ?",
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: 'where is my order?', trigger: '3' },
                    { value: 2, label: 'Can i pick my food while reserving a table?', trigger: '4' },
                    { value: 3, label: 'Other question?', trigger: '5' }, 
                    { value: 4, label: 'Pages?', trigger: '7' }, 
                ],
            },
            {
                id: '3',
                message: 'If you are sure that your order is confirmed, go ahead and check its state! :D ',
                trigger: '2',
            },
            {
                id: '4',
                message: 'ofc! You can also order it for pick up!',
                trigger: '2',

            },
            {
                id: '5',
                user: true,
                trigger: '6',
            },
            {
                id: '6',
                message: 'Sorry i cant help you with this question try contacting us!',
                trigger: '2',
            },
            {
                id: '7',
                message: 'What screen would you like to see?',
                trigger: '8',
            },
            {
                id: '8',
                options: [
                    { value: 1, label: 'Find Food', trigger: '9' },
                    { value: 2, label: 'Contact', trigger: '11' },
                ],
            },
            {
                id: '9',
                message: 'Loading..',
                trigger: '10',
            },
            {
                id: '10',
                component:<Redirect to="/findrestaurant" />,
            },
            {
                id: '11',
                message: 'Loading..',
                trigger: '12',
            },
            {
                id: '12',
                component:<Redirect to="/contact" />,
            },
            {
                id: '13',
                message: 'Sayonara',
                end: true,
            },
            
        ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} botAvatar={avatar}/>
        </ThemeProvider>
    );
}
export default CustomChatbot;