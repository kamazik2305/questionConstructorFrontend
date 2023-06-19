import * as React from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { CheckedQuestion } from "../../../Pages/QuestionPage/CheckedQuestion"
import axios from "../../../axios"

export const CheckAnswerType1 = ({ question, setIsCheck, setQuestion }) => {

    const checkAnswer = async (answerText, verity) => {
        const selectedAnswers = [{ answerText, verity }]
        const questionText = question.questionText
        const answers = question.answerVersions
        const checkQuestion = { questionText, answers, selectedAnswers }
        const result = await axios.post('/checkType13', checkQuestion)
        setQuestion(result.data)
        setIsCheck(true)
    }

    return (
        <div>
            <h3>Выберете вариант ответа</h3>
            {question.answerVersions?.map(answer => (
                <>
                    <div key={answer.answerText}>
                        <button type="button" onClick={() => checkAnswer(answer.answerText, answer.verity)} > {answer.answerText} </button>
                    </div>

                </>
            ))}

        </div>

    )
}