import * as React from "react"
import { Question } from "../Components/Question/Question"
import { Link } from "react-router-dom"
import axios from "../axios"
import { Test } from "../Components/Test/Test"

export const TestList = () => {

    const [tests, setTests] = React.useState([])

    React.useEffect(() => {
        loadTests()
    }, [])

    const loadTests = async () => {
        const result = await axios.get('/tests')
        setTests(result.data)
    }

    return (
        <div>
            <h1>Список тестов</h1>
            {tests.map(test => (
                <Test key={test.id} id={test.id} testName={test.testName}
                    tests={tests} setTests={setTests} />
            ))
            }
            <Link to="add"> Добавить тест </Link>

        </div>
    )
}