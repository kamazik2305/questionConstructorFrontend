import { Button as p, Col, Container as div, Navbar as nav, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./QuestionStyle.css"


export const Question = ({ id, questionText, questions, setQuestions }) => {

    const deleteClick = (id) => {
        fetch(`http://localhost:8090/questions/${id}`, { method: "DELETE" })
            .then(() => {
                console.log("Вопрос удалён")
                setQuestions(questions.filter(question => question.id !==id ))
            })
    }


    

    return (
        <div className="question" id={id}>

            <nav>
                <a> {id} </a>
                <a> {questionText} </a>
                <Link className="question-btn" to={`/${id}`} > Перейти к вопросу </Link>
                <a className="question-btn" > Редактировать </a>
                <button className="question-btn" type="button" onClick={() => deleteClick(id)}
                >Удалить
                </button>
            </nav>
        </div>
    )
}