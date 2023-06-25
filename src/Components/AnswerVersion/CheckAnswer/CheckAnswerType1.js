import * as React from "react"
import axios from "../../../axios"

export const CheckAnswerType1 = ({ question, setIsCheck }) => {

    // const checkAnswer = async (answerText, verity) => {
    //     const selectedAnswers = [{ answerText, verity }]
    //     const questionText = question.questionText
    //     const answers = question.answerVersions
    //     const checkQuestion = { questionText, answers, selectedAnswers }
    //     const result = await axios.post('/checkType13', checkQuestion)
    //     setIsCheck(true)
    // }

    return (
        <div>
            <h5>Выберете вариант ответа</h5>
            {question.answerVersions?.map(answer => (
                <>
                    <div key={answer.answerText}>
                        {/* <button type="button" onClick={() => checkAnswer(answer.answerText, answer.verity)} > {answer.answerText} </button> */}
                        <p> {answer.answerText} </p>
                    </div>

                </>
            ))}

        </div>

    )
}