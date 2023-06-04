import * as React from "react"

export const AddAnswerType2 = ({setAnswerVersions}) => {

    const answer = { answerText: "" , verity: false }

    const [answers, setAnswers] = React.useState(
        Array.from({ length: 2 }, () => answer)
    )

    const handleInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...answers]

        const answerVersion = { answerText: value, verity: true }
        newArray[index] = answerVersion
        setAnswers(newArray)
        setAnswerVersions(answers)
    }

    const addEmptyAnswer = () => {
        setAnswers([...answers, answer])
    }

    const deleteAnswer = (value) => {
        setAnswers(answers.filter(answer => answer.answerText !== value))
        console.log(value)
    };

    const renderAnswers = () => {
        const answerInputs = []
        for (let i = 0; i < answers.length; i++) {
            answerInputs.push(
                <div>
                    <input
                        placeholder="Введите ответ"
                        key={`answer #${i}`}
                        type="text"
                        value={answers[i].answerText}
                        onChange={(event) => handleInputChange(event, i)}
                    />
                    <button type="button" value={answers[i].answerText}
                        onClick={(e) => deleteAnswer(e.target.value)} > Удалить вариант </button>
                </div>
            )
        }
        answerInputs.push(
            <button type="button" onClick={() => addEmptyAnswer()} > Добавить ответ </button>
        )
        return answerInputs;
    }

    function log() {
        console.log(answers)
    }

    return(
        <div>
            <button type="button" onClick={() => log()}> read false ansers </button>
            <p>Введите ответы</p>
            {renderAnswers()}
        </div>
    )
}