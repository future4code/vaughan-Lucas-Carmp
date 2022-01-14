import React from "react";

import styled from "styled-components";


const MainScreen = styled.div`
    display: flex;
    justify-content: center;

`
const ConversationScreen = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 50vw;
    height: 100vh;
    border-radius: 25px;
    background-color: #f9eac3
`
const UsernameInput = styled.input`
    height: 10vh;
    background-color:  ;
    width: 20%;
    border: 0;
    border-radius: 25px;
    margin-bottom: 10px;
    background-color: #007292; 
    ::-webkit-input-placeholder {
        color: white;
    }
    color: white;
    font-size: large;
`
const MessageInput = styled.input`
    height: 10vh;
    background-color:  ;
    width: 40%;
    border: 0;
    border-radius: 25px;
    margin-bottom: 10px;
    background-color: #007292;
    ::-webkit-input-placeholder {
    color: white;
    }
    color: white;
    font-size: large;

    
`
const SendButton = styled.button`
    height: 10vh;
    margin-bottom: 12px;
    border: 0;
    border-radius:10px;
    width: 15%;
    background-color: #ff8c00;
    &:hover{
        background-color: #ffb152;
        border-radius: 100px 50px;
        cursor: pointer
    }
    transition: all 0.5s ease;
`


export class AppScreen extends React.Component{
    render(){
        return(
        <MainScreen>
            <ConversationScreen>

                <UsernameInput placeholder="Username">
                </UsernameInput>
                <MessageInput placeholder="Message">
                </MessageInput>
                <SendButton>
                    Send
                </SendButton>
            </ConversationScreen>
        </MainScreen>
        )
    }
}