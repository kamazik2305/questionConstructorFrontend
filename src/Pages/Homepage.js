import * as React from "react"
import { Question } from "../Components/Question/Question"
import { Link } from "react-router-dom"
import axios from "../axios"

export const Homepage = () =>{

    const [questions, setQuestions] = React.useState([])

    React.useEffect( () =>{
        loadQuestions()
    }, [])

    const loadQuestions = async()=>{
        const result = await axios.get('/questions')
        setQuestions(result.data)
    }

    return(
        <div>
            <h1>Список вопросов</h1>
            {questions.map(question => (
                <Question  key={question.id} id={question.id} questionText={question.questionText} 
                 questions={questions} setQuestions={setQuestions} />
            ))
            }
            <Link to="add"> Добавить вопрос </Link>

        </div>
    )
}