import { Link, useParams } from "react-router-dom"
import { Question } from "../../Components/Question/Question"
import axios from "../../axios"
import * as React from "react"
import { FullQuestion } from "../../Components/Question/FullQuestion"

export const TestPage = () => {

    const [questions, setQuestions] = React.useState([])
    const { id } = useParams()

    React.useEffect(() => {
        loadQuestions()
    }, [])

    const loadQuestions = async () => {
        const result = await axios.get(`/tests/${id}/questions`)
        setQuestions(result.data)
    }

    return (
        <div>
            <h1>Список вопросов</h1>
            {questions.map(question => (
                // <Question key={question.id} id={question.id} questionText={question.questionText}
                //     questions={questions} setQuestions={setQuestions} />
                <FullQuestion key={question.id} question={question} />
            ))
            }
            <Link to="add"> Добавить вопрос в тест</Link>

        </div>
    )
}