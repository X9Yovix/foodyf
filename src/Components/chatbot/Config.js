import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import './Config.css';

function CustomChatbot() {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const theme = {
        background: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#67a9ff",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "#67a9ff",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
    };

    const steps =
        [
            {
                id: '1',
                message: 'Hello customer, how can i help you today?',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: 'where is my order?', trigger: '3' },
                    { value: 2, label: 'Can i pick my food while reserving a table?', trigger: '4' },
                    { value: 3, label: 'Other question?', trigger: '5' },
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
        ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />
        </ThemeProvider>
    );
}
export default CustomChatbot;