import * as React from "react"
import { AddAnswerType1 } from "../../Components/AnswerVersion/AddAnswer/AddAnswerType1"
import { AddAnswerType2 } from "../../Components/AnswerVersion/AddAnswer/AddAnswerType2"
import { AddAnswerType3 } from "../../Components/AnswerVersion/AddAnswer/AddAnswerType3"
import axios from "../../axios"
import { useNavigate, useParams } from "react-router-dom"


export const AddQuestion = () => {

    const [questionText, setQuestionText] = React.useState('')

    const [idQuestionType, setIdQuestionType] = React.useState('')
    const [questionTypes, setQuestionTypes] = React.useState([])
    const [answerVersions, setAnswerVersions] = React.useState([])
    const {id} = useParams()

    const navigate = useNavigate()

    React.useEffect(() => {
        loadTypes()
    }, [])

    const loadTypes = async () => {
        const result = await axios.get('/question-types')
        setQuestionTypes(result.data)
    }

    const addQuestionClick = async (e) => {
        e.preventDefault()
        const question = { questionText, idQuestionType, answerVersions }
        axios.post(`/questions/${id}/add`, question).then(() => {console.log("added") })
        navigate(`/${id}`)
    }

    const renderAnswerTypes = (idType) => {
        switch (idType) {
            case "": return (
                <div>Select type first</div>
            )
            case "1": return (
                <AddAnswerType1 setAnswerVersions={setAnswerVersions} />
            )
            case "2": return (
                <AddAnswerType2 setAnswerVersions={setAnswerVersions} />
            )
            case "3": return (
                <AddAnswerType3 setAnswerVersions={setAnswerVersions} />
            )
        }
    }

    function alertQuestion() {
        const question = { questionText: questionText, idQuestionType, answerVersions }
        console.log(question)
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Введите текст вопроса" autoComplete="off"
                    value={questionText} onChange={(e) => { setQuestionText(e.target.value) }} />
                <select onChange={(e) => { setIdQuestionType(e.target.value) }}>
                    <option value="" > Тип вопроса </option>
                    {questionTypes.map(qt => (
                        <option key={qt.id} value={qt.id}> {qt.typeName} </option>
                    ))}
                </select>
                <button type="button" onClick={() => alertQuestion()}>alert</button>
                {renderAnswerTypes(idQuestionType)}
                <button type="submit" onClick={(e) => addQuestionClick(e)}>Добавить вопрос</button>
            </form>
        </div>
    )

}