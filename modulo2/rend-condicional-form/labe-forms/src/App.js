import React from 'react';
import styled from 'styled-components';
import { CollegeQuestions } from './components/for-college-students/college-data';
import { FirstQuestions } from './components/generic-data/generic-data';
import { WhyNotQuestions } from './components/non-college-students/why-not';
import { ThxScreen } from './components/thx-screen/thank-you';

const MainDiv = styled.div`
 display: flex;
 flex-direction: column;
 background-color: lavender;
 width: 30vw;
 position: relative;
 left: 35%;
 text-align: center
`

const NextStepBtn = styled.button`
  width: 25%;
  align-self: center;
  border: 0;
  border-radius: 24px;
  background-color: cyan;
`

class App extends React.Component {
  state = {
    step: 1,
  };

  onClickNextStep = () => {
    this.setState({step: this.state.step + 1})
  };

  render(){
    const stepRender = () => {
      switch(this.state.step){
      case 1: return (
      <div>
        <FirstQuestions/>
        <NextStepBtn onClick={this.onClickNextStep}>Next step</NextStepBtn>
      </div>);
      case 2: return (
      <div>
        <CollegeQuestions/>
        <NextStepBtn onClick={this.onClickNextStep}>Next step</NextStepBtn>
      </div>);
      case 3: return (
      <div>
        <WhyNotQuestions/>
        <NextStepBtn onClick={this.onClickNextStep}>Next step</NextStepBtn>
      </div>);
      case 4: return <ThxScreen/>
      }
    }

    
    return (
      <MainDiv>                                                                                                       
        {stepRender()}
      </MainDiv>
    ); 
}
}

export default App;
