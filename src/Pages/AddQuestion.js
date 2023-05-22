import * as React from "react"
import { Question } from "../Components/Question/Question"


export const AddQuestion = () => {

    const [questionText, setQuestionText] = React.useState('')

    const [idQuestionType, setIdQuestionType] = React.useState('')
    const [questionTypes, setQuestionTypes] = React.useState([])


    const [falseAnswers, setFalseAnswers] = React.useState(
        Array.from({ length: 3 }, () => '')
    )

    const [trueAnswers, setTrueAnswers] = React.useState(
        Array.from({ length: 1 }, () => '')
    )

    
    function alertClick() {
        const answers = [...falseAnswers, ...trueAnswers]
        const question = { questionText: questionText, idQuestionType, answers }

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

    const handleFalseInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...falseAnswers]

        const answerVersion = { answerText: value, verity: false }
        newArray[index] = answerVersion
        setFalseAnswers(newArray)
    }

    const handleTrueInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...trueAnswers]

        const answerVersion = { answerText: value, verity: true }
        newArray[index] = answerVersion
        setTrueAnswers(newArray)
    }



    const renderFalseAnswers = () => {
        const answerInputs = []
        for (let i = 0; i < falseAnswers.length; i++) {
            answerInputs.push(
                <div>
                    <input
                        placeholder="Введите ответ"
                        key={`answer #${i}`}
                        type="text"
                        onChange={(event) => handleFalseInputChange(event, i)}
                    />
                </div>
            )
        }
        return answerInputs;
    }

    const renderTrueAnswers = () => {
        const answerInputs = []
        for (let i = 0; i < trueAnswers.length; i++) {
            answerInputs.push(
                <div>
                    <input
                        placeholder="Введите ответ"
                        key={`answer #${i}`}
                        type="text"
                        onChange={(event) => handleTrueInputChange(event, i)}
                    />
                </div>
            )
        }
        return answerInputs;
    }

    const addQuestionClick = (e) => {
        e.preventDefault()
        const answerVersions = [...falseAnswers, ...trueAnswers]
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
                <input type="text" placeholder="Введите назавание вопроса" autoComplete="off"
                    value={questionText} onChange={(e) => { setQuestionText(e.target.value) }} />
                <button type="button" onClick={alertClick}>log</button>


                <select onChange={(e) => { setIdQuestionType(e.target.value) }}>
                    <option value={null} > Тип вопроса </option>
                    {questionTypes.map(qt => (
                        <option key={qt.id} value={qt.id}> {qt.typeName} </option>
                    ))}
                </select>
                <p>Неверные ответы</p>
                {renderFalseAnswers()}
                <p>Верные ответы</p>
                {renderTrueAnswers()}
                <button type="submit" onClick={(e) => addQuestionClick(e)}>Добавить вопрос</button>
            </form>
        </div>
    )

}