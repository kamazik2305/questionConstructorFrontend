import * as React from "react"
import { useParams } from "react-router-dom"
import { CheckAnswerType1 } from "../../Components/AnswerVersion/CheckAnswer/CheckAnswerType1"

export const FullQuestion = () => {

    const [question, setQuestion] = React.useState([])
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`http://localhost:8090/questions/${id}`, { method: "GET" })
            .then(res => res.json())
            .then((result) => {
                setQuestion(result)
            })
    }, [])

    const writeAnswers = (answerVersions, idQuestionType) => {
        switch (idQuestionType) {
            case 1: return (
                <CheckAnswerType1 answerVersions={answerVersions} />
            )
        }
    }

    return (
        <div>
            <div>
                <p> {question.id} {question.questionText} {question.idQuestionType} </p>
                {writeAnswers(question.answerVersions, question.idQuestionType)}
            </div>

        </div>
    )
}