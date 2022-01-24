import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
display: flex;
flex-direction: column;
`
export class WhyNotQuestions extends React.Component{
    render(){
        return(
            <div>    
            <h1>Step 3: Non-college data</h1>
            <form>
                <ol>    
                    <li>
                        <QuestionContainer>
                            <label for="1st-question">Why didn't you conclude the college?</label>
                            <input/>
                        </QuestionContainer>
                    </li> 
                    <li>
                        <QuestionContainer>
                            <label for="2nd-question">Have you attended any complementar course?</label>
                            <select>
                                <option>-Choose an option-</option>
                                <option>Technical course</option>
                                <option>Portuguese course</option>
                                <option>I didn't take any additional courses.</option>
                            </select>
                        </QuestionContainer>
                    </li>
                </ol>
            </form>
            
        </div> 
        )
    }
}