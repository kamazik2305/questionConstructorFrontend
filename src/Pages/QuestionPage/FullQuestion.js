import * as React from "react"
import { useParams } from "react-router-dom"
import { CheckAnswerType1 } from "../../Components/AnswerVersion/CheckAnswer/CheckAnswerType1"
import { CheckAnswerType2 } from "../../Components/AnswerVersion/CheckAnswer/CheckAnswerType2"
import { CheckAnswerType3 } from "../../Components/AnswerVersion/CheckAnswer/CheckAnswerType3"
import { CheckedQuestion } from "./CheckedQuestion"
import axios from "../../axios"

export const FullQuestion = () => {

    const [question, setQuestion] = React.useState([])
    const { id } = useParams()
    const [isCheck, setIsCheck] = React.useState(false)

    React.useEffect(() => {
         loadQuestions()
    }, [])

    const loadQuestions = async()=>{
        const result = await axios.get(`/questions/${id}`)
        setQuestion(result.data)
    }

    const writeAnswers = (answerVersions, idQuestionType) => {
        switch (idQuestionType) {
            case 1: return (
                <CheckAnswerType1 question={question} setIsCheck={setIsCheck} setQuestion={setQuestion} />
            )
            case 2: return (
                <CheckAnswerType2 question={question} setIsCheck={setIsCheck} setQuestion={setQuestion} />
            )
            case 3: return (
                <CheckAnswerType3 answerVersions={answerVersions} />
            )
        }
    }

    if(isCheck)
    {
        return(
            <CheckedQuestion question={question}/>
        )
    }
    else{
        return (
            <div>
                <div>
                    <p> {question.id} {question.questionText} {question.idQuestionType} </p>
                    {writeAnswers(question.answerVersions, question.idQuestionType)}
                </div>
    
            </div>
        )
    }
    
}