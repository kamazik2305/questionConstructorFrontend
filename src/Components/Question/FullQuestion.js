import * as React from "react"
import { useParams } from "react-router-dom"
import { CheckAnswerType1 } from "../AnswerVersion/CheckAnswer/CheckAnswerType1"
import { CheckAnswerType2 } from "../AnswerVersion/CheckAnswer/CheckAnswerType2"
import { CheckAnswerType3 } from "../AnswerVersion/CheckAnswer/CheckAnswerType3"
import { CheckedQuestion } from "./CheckedQuestion"
import axios from "../../axios"
import "./QuestionStyle.css"

export const FullQuestion = ({question}) => {

    // const [question, setQuestion] = React.useState([])
    // const { id } = useParams()
    const [isCheck, setIsCheck] = React.useState(false)

    // React.useEffect(() => {
    //      loadQuestions()
    // }, [])

    // const loadQuestions = async()=>{
    //     const result = await axios.get(`/questions/${id}`)
    //     setQuestion(result.data)
    // }

    const writeAnswers = (answerVersions, idQuestionType) => {
        switch (idQuestionType) {
            case 1: return (
                <CheckAnswerType1 question={question} setIsCheck={setIsCheck}  />
            )
            case 2: return (
                <CheckAnswerType2 question={question} setIsCheck={setIsCheck}  />
            )
            case 3: return (
                <CheckAnswerType3 answerVersions={answerVersions} />
            )
        }
    }

    
    if(isCheck)
    {
        return(
            <CheckedQuestion question={question} setIsCheck={setIsCheck} />
        )
    }
    else{
        return (
            <div >
                <div>
                    <h3> {question.id} {question.questionText} {question.idQuestionType} </h3>
                    {writeAnswers(question.answerVersions, question.idQuestionType)}
                </div>
    
            </div>
        )
    }
    
}