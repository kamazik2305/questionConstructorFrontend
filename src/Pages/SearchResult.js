import * as React from "react"
import { Link } from "react-router-dom"
import { Question } from "../Components/Question/Question"
import axios from "../axios"

export const SearchResult = ({ searchString }) => {

    const [searchQuestions, setSearchQuestions] = React.useState([])

    React.useEffect(() => {
        loadResult()
    }, [])

    const loadResult = async()=>{
        const result = await axios.get(`search?searchString=${searchString}`)
        setSearchQuestions(result.data)
    }

    return (

        <div>

            <h1>Результат поиска</h1>
            {searchQuestions.map(question => (
                <Question  key={question.id} id={question.id} questionText={question.questionText}  />
            ))
            }
        </div>

    )
}