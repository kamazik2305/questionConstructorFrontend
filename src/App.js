import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { FullQuestion } from "./Pages/QuestionPage/FullQuestion";
import { AddQuestion } from "./Pages/QuestionPage/AddQuestion";
import { SearchForm } from "./Components/SearchForm/SearchForm";
import { SearchResult } from "./Pages/SearchResult";
import * as React from "react"
import { AddAnswerType1 } from "./Components/AnswerVersion/AddAnswer/AddAnswerType1";

function App() {

  const [searchString, setSearchString] = React.useState('')

  return (
    <>
      <BrowserRouter>
        <SearchForm searchString={searchString} setSearchString={setSearchString} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<FullQuestion />} />
          <Route path="/add" element={<AddQuestion />} />
          <Route path="/search-result" element={<SearchResult searchString={searchString}/>} />
          <Route path="/answer" element={<AddAnswerType1/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
