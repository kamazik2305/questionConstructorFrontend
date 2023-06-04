import * as React from "react"


export const CheckAnswerType1 = ({ answerVersions }) => {


    const checkAnswer = (answerText, verity) => {
        const answerVersion = { answerText, verity }
        fetch("http://localhost:8090/checkType1", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(answerVersion)
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result)
        })
    }

    return (
        <div>
            <h3>Выберете вариант ответа</h3>
            {answerVersions?.map(answer => (
                <>
                    <div key={answer.answerText}>
                        <button type="button" onClick={() => checkAnswer(answer.answerText, answer.verity)} >{answer.answerText} </button>
                    </div>
                </>

            ))}

        </div>

    )
}