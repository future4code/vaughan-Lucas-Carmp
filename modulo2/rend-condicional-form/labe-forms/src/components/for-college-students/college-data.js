import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
`
export class CollegeQuestions extends React.Component{
    render(){
        return(
            <div>    
            <h1>Step 2: College data</h1>
            <form>
                <ol>    
                    <li>
                        <QuestionContainer>
                            <label for="1st-question">What's your main area?</label>
                            <input/>
                        </QuestionContainer>
                    </li> 
                    <li>
                        <QuestionContainer>
                            <label for="2nd-question">Where do you study at?</label>
                            <input/>
                        </QuestionContainer>
                    </li>
                </ol>
            </form>
            
        </div>
        )
    }
}