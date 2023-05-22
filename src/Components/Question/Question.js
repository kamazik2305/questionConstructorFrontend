import { Button as p, Col, Container as div, Navbar as nav, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./QuestionStyle.css"


export const Question = ({ id, questionText }) => {

    const deleteClick = (id) => {
        fetch(`http://localhost:8090/questions/${id}`, { method: "DELETE" })
            .then(() => {
                console.log("Вопрос удалён")
            })
         let question = document.getElementById(id)
             question.parentNode.removeChild(question)
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