import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: flex-end
`

const App = styled.div`
  font-family: sans-serif;
  border-radius: 50px;
  background-color: #49d169;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100%;
  align-items: space-around;
  justify-content: flex-end;
`
const Baloon = styled.div`
  background-color: lavender;
  border-radius: 25px;
  margin: 5px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: auto;
`;

const ConversationModule = styled.div`
  display: flex;
  flex-direction: column;
  
`

const InteractiveModule = styled.div`
  display: flex;
  justify-content: space-around;
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

export default class Application extends React.Component {
  state = {
    inputUsername: "",
    inputText: "",
    messages: [

    ]
  };

  getInput = (event) =>
    this.setState({
      inputUsername: event.target.value
    });

  getInputText = (event) =>
    this.setState({
      inputText: event.target.value
    });

  addMessage = () => {
    const newMessageList = [
      ...this.state.messages,
      { username: this.state.inputUsername, text: this.state.inputText }
    ];

    this.setState({
      messages: newMessageList,
      inputUsername: "",
      inputText: ""
    });
  };



  render() {
    const conversation = this.state.messages.map(
      (message, index) => {
        return (
          <Baloon key={index}>
          <span>  
            <p><b>{message.username}:</b> {message.text}</p>
            
          </span>
          </Baloon>
        );
      }
    );

    return (
      <Screen> 
        <App>
        <ConversationModule>
          {conversation}
        </ConversationModule>
        <InteractiveModule>
            <UsernameInput
              placeholder="User"
              value={this.state.inputUsername}
              onChange={this.getInput}
            />

            <MessageInput
              placeholder="Message"
              value={this.state.inputText}
              onChange={this.getInputText}
            />

            <SendButton onClick={this.addMessage}>Send</SendButton>
        </InteractiveModule>
        </App>
      </Screen> 
    );
  }
}