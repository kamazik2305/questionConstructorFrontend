import * as React from "react"


export const CheckAnswerType2 = ({ question, setIsCheck, setQuestion }) => {

    const [answer, setAnswer] = React.useState('')

    function checkAnswer() {
        const versions = []

        for (let i = 0; i < question.answerVersions.length; i++)
        {
            versions.push( question.answerVersions[i].answerText )
        }
        console.log(versions)
    }


    return (
        <div>
            <h3>Введите ответ</h3>
            <input type="text" placeholder="Введите ответ" value={answer}
                onChange={(e) => setAnswer(e.target.value)} ></input>
            <button type="button" onClick={()=>checkAnswer() } >Отправить ответ</button>
        </div>

    )
}