import * as React from "react"
import { Link } from "react-router-dom"

export const SearchForm = ({ searchString, setSearchString }) => {



    return (
        <div>
            <h1>Поиск вопросов</h1>
            <input type="text" placeholder="Введите название вопроса"
                value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            <Link to={"/search-result"} > Поиск </Link>
        </div>

    )
}