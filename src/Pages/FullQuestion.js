import * as React from "react"
import { useParams } from "react-router-dom"

export const FullQuestion = () => {

    const [question, setQuestion] = React.useState([])
    const {id} = useParams()
    
    React.useEffect(() => {
        fetch(`http://localhost:8090/questions/${id}`, { method: "GET" })
            .then(res => res.json())
            .then((result) => {
                setQuestion(result)
            })
            
    }, [])

    function printClick()
    {
        console.log(question.answerVersions)
    }

    return(
        <div>
                <div>
                    <button onClick={printClick} > printClick </button>
                    <p> {question.id} {question.questionText} </p>
                    <h3>Выберете вариант ответа</h3>
                    {question.answerVersions?.map(a =>(
                        <p> {a.id} {a.answerText} </p>
                    ))}
                </div>
            
        </div>
    )
}