import axios from "axios"
import * as React from "react"

export const CheckedQuestion = ({ question }) => {

    function alertQuestion() {
        console.log(question)
    }

    const readAnswer = () => {
        let description
        if (JSON.stringify(question.selectedAnswers) === JSON.stringify(question.trueAnswers))
            description = "Ответ верный"
        else
            description = "Ответ неверный"
        return description
    }



    return (
        <div>
            <div>
                <button type="button" onClick={() => alertQuestion()}>alert</button>
                <p>Текст: {question.questionText} </p>
                <p>Выбранный ответ: </p>
                {question.selectedAnswers?.map(answer => (
                    <a> {answer.answerText};  </a>
                ))}
                <p>Верный ответ: </p>
                {question.trueAnswers?.map(answer => (
                    <a> {answer.answerText} </a>
                ))}
                <p> {readAnswer()} </p>

            </div>

        </div>
    )
}