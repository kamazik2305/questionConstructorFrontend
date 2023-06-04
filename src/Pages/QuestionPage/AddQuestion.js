import * as React from "react"
import { AddAnswerType1 } from "../../Components/AnswerVersion/AddAnswer/AddAnswerType1"
import { AddAnswerType2 } from "../../Components/AnswerVersion/AddAnswer/AddAnswerType2"
import { AddAnswerType3 } from "../../Components/AnswerVersion/AddAnswer/AddAnswerType3"


export const AddQuestion = () => {

    const [questionText, setQuestionText] = React.useState('')

    const [idQuestionType, setIdQuestionType] = React.useState('')
    const [questionTypes, setQuestionTypes] = React.useState([])
    const [answerVersions, setAnswerVersions] = React.useState([])




    React.useEffect(() => {
        fetch("http://localhost:8090/question-types", { method: "GET" })
            .then(res => res.json())
            .then((result) => {
                setQuestionTypes(result);
            }
            )
    }, [])

    

    const addQuestionClick = (e) => {
        e.preventDefault()
        const question = { questionText, idQuestionType, answerVersions }
        fetch(`http://localhost:8090/questions/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(question)
        }).then(() => {
            console.log("Вопрос добавлен")
        })
    }

    const renderAnswerTypes = (idType) =>
    {
        switch(idType){
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

    function alertQuestion()
    {
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
                <button type="button" onClick={()=>alertQuestion()}>alert</button>
                {renderAnswerTypes(idQuestionType)}
                <button type="submit" onClick={(e) => addQuestionClick(e)}>Добавить вопрос</button>
            </form>
        </div>
    )

}