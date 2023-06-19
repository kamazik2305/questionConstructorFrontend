import { Button as p, Col, Container as div, Navbar as nav, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import "./QuestionStyle.css"
import axios from "../../axios"

export const Question = ({ id, questionText, questions, setQuestions }) => {


    const deleteClick = async(id) => {
        axios.delete(`/questions/${id}`)
        setQuestions(questions.filter(question => question.id !==id ))
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