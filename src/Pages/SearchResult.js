import * as React from "react"
import { Link } from "react-router-dom"
import { Question } from "../Components/Question/Question"

export const SearchResult = ({ searchString }) => {

    const [searchQuestions, setSearchQuestions] = React.useState([])

    React.useEffect(() => {
        fetch(`http://localhost:8090/search?searchString=${searchString}`, { method: "GET" })
            .then(res => res.json())
            .then((result) => {
                setSearchQuestions(result);
            }
            )
    }, [])

    return (

        <div>

            <h1>Результат поиска</h1>
            {searchQuestions.map(question => (
                <Question  key={question.id} id={question.id} questionText={question.questionText}  />
            ))
            }
            <Link to="/add"> Добавить вопрос </Link>

        </div>

    )
}