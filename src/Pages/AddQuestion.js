import * as React from "react"
import { Question } from "../Components/Question/Question"


export const AddQuestion = () => {

    const [questionText, setQuestionText] = React.useState('')

    const [idQuestionType, setIdQuestionType] = React.useState('')
    const [questionTypes, setQuestionTypes] = React.useState([])


    const [answerVersions, setAnswerVersions] = React.useState(
        Array.from({ length: 1 }, () => '')
    )


    function alertClick() {
        const question = { questionText: questionText, idQuestionType, answerVersions }

        console.log(JSON.stringify(question))
    }

    React.useEffect(() => {
        fetch("http://localhost:8090/question-types", { method: "GET" })
            .then(res => res.json())
            .then((result) => {
                setQuestionTypes(result);
            }
            )
    }, [])

    const handleInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...answerVersions]

        const answerVersion = { answerText: value }
        newArray[index] = answerVersion
        setAnswerVersions(newArray)

    }

    const renderAnswerVersions = () => {
        const answerInputs = []
        for (let i = 0; i < answerVersions.length; i++) {
            answerInputs.push(
                <div>
                    <input
                        placeholder="Введите ответ"
                        key={`answer #${i}`}
                        type="text"
                        onChange={(event) => handleInputChange(event, i)}
                    />
                </div>
            )
        }
        return answerInputs;
    }

    const addQuestionClick = (e) => {
        e.preventDefault()
        const question = { questionText: questionText, idQuestionType, answerVersions }
        fetch(`http://localhost:8090/questions/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(question)
        }).then(() => {
            console.log("Вопрос добавлен")
        })
    }




    return (
        <div>
            <form>
                <input type="text" name="testName" placeholder="Введите назавание теста" autoComplete="off"
                    value={questionText} onChange={(e) => { setQuestionText(e.target.value) }} />
                <button type="button" onClick={alertClick}>log</button>


                <select onChange={(e) => { setIdQuestionType(e.target.value) }}>
                    <option value={null} > Тип вопроса </option>
                    {questionTypes.map(qt => (
                        <option key={qt.id} value={qt.id}> {qt.typeName} </option>
                    ))}
                </select>

                {renderAnswerVersions()}
                <button type="submit" onClick={(e) => addQuestionClick(e)}>Добавить вопрос</button>
            </form>
        </div>
    )

}