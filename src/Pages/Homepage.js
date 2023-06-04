import * as React from "react"
import { Question } from "../Components/Question/Question"
import { Link } from "react-router-dom"

export const Homepage = () =>{

    const [questions, setQuestions] = React.useState([])

    React.useEffect( () =>{
        fetch("http://localhost:8090/questions", {method: "GET"})
        .then(res => res.json())
        .then((result) => {
            setQuestions(result)
        })
        
    }, [])

    


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