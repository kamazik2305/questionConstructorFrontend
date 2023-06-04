import * as React from "react"

export const AddAnswerType3 = ({ setAnswerVersions }) => {

    const answer = { answerText: "" , verity: false }

    const [falseAnswers, setFalseAnswers] = React.useState(
        Array.from({ length: 3 }, () => answer)
    )

    const [trueAnswers, setTrueAnswers] = React.useState(
        Array.from({ length: 3 }, () => answer)
    )

    const handleFalseInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...falseAnswers]

        const answerVersion = { answerText: value, verity: false }
        newArray[index] = answerVersion
        setFalseAnswers(newArray)
        setAnswerVersions([...falseAnswers, ...trueAnswers])
    }

    const handleTrueInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...trueAnswers]
        const answerVersion = { answerText: value, verity: true }
        newArray[index] = answerVersion
        setTrueAnswers(newArray)
        setAnswerVersions([...falseAnswers, ...trueAnswers])
    }

    const addEmptyFalseAnswer = () => {
        setFalseAnswers([...falseAnswers, answer])
    }

    const addEmptyTrueAnswer = () => {
        setTrueAnswers([...trueAnswers, answer])
    }

    const deleteFalseAnswer = (value) => {
        setFalseAnswers(falseAnswers.filter(answer => answer.answerText !== value))
    };

    const deleteTrueAnswer = (value) => {
        setTrueAnswers(falseAnswers.filter(answer => answer.answerText !== value))
    };

    const renderFalseAnswers = () => {
        const answerInputs = []
        for (let i = 0; i < falseAnswers.length; i++) {
            answerInputs.push(
                <div>
                    <input
                        placeholder="Введите ответ"
                        key={`answer #${i}`}
                        type="text"
                        value={falseAnswers[i].answerText}
                        onChange={(event) => handleFalseInputChange(event, i)}
                    />
                    <button type="button" value={falseAnswers[i].answerText}
                        onClick={(e) => deleteFalseAnswer(e.target.value)} > Удалить вариант </button>
                </div>
            )
        }
        answerInputs.push(
            <button type="button" onClick={() => addEmptyFalseAnswer()} > Добавить неправильный ответ </button>
        )
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
                        value={trueAnswers[i].answerText}
                    />
                    <button type="button" value={trueAnswers[i].answerText}
                        onClick={(e) => deleteTrueAnswer(e.target.value)} > Удалить вариант </button>
                </div>
            )
        }
        answerInputs.push(
            <button type="button" onClick={() => addEmptyTrueAnswer()} > Добавить правильный ответ </button>
        )
        return answerInputs;
    }

    function log() {
        console.log(falseAnswers)
    }

    return (
        <div>
            <button type="button" onClick={() => log()}> read false ansers </button>
            <p> False </p>
            {renderFalseAnswers()}
            <p> True </p>
            {renderTrueAnswers()}
        </div>
    )
}