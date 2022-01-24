import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
`
export class FirstQuestions extends React.Component {
    render(){
        return(
        <div>    
            <h1>Step 1: General data</h1>
            <form>
                <ol>    
                    <li>
                        <QuestionContainer>
                            <label for="1st-question">What's your name?</label>
                            <input/>
                        </QuestionContainer>
                    </li> 
                    <li>
                        <QuestionContainer>
                            <label for="2nd-question">How old are you?</label>
                            <input/>
                        </QuestionContainer>
                    </li>
                    <li>
                        <QuestionContainer>
                            <label for="3rd-question">What's your best e-mail address?</label>
                            <input/>
                        </QuestionContainer>
                    </li>
                    <li>
                        <QuestionContainer>
                            <label for="4th-question">Scholarity:</label>
                            <select>
                                <option>-Choose an option-</option>
                                <option>High school incomplete</option>
                                <option>High school complete</option>
                                <option>College complete</option>
                                <option>College incomplete</option>
                            </select>
                        </QuestionContainer>
                    </li>
                </ol>
            </form>
            
        </div>
        )
    }
}