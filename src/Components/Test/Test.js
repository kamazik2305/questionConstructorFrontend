import * as React from "react"
import axios from "../../axios"
import "./TestStyle.css"
import { Link } from "react-router-dom"

export const Test = ({ id, testName, tests, setTests }) => {

    const deleteTestClick = async (id) => {
        axios.delete(`tests/${id}`)
        setTests(tests.filter(test => test.id !==id))
    }

    return (
        <div className="question" id={id}>

            <nav>
                <a> {id} </a>
                <a> {testName} </a>
                <Link className="question-btn" to={`/${id}`} > Перейти к тесту </Link>
                <a className="question-btn" > Редактировать </a>
                <button className="question-btn" type="button" onClick={() => deleteTestClick(id)}
                >Удалить
                </button>
            </nav>
        </div>
    )

}