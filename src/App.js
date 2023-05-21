import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { FullQuestion } from "./Pages/FullQuestion";
import { AddQuestion } from "./Pages/AddQuestion";
import { SearchForm } from "./Components/SearchForm/SearchForm";
import { SearchResult } from "./Pages/SearchResult";
import * as React from "react"

function App() {

  const [searchString, setSearchString] = React.useState('')

  function alertStr()
  {
    alert(searchString)
  }

  return (
    <>
      <BrowserRouter>
        <SearchForm searchString={searchString} setSearchString={setSearchString} />
        <a onClick={alertStr} > al </a>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<FullQuestion />} />
          <Route path="/add" element={<AddQuestion />} />
          <Route path="/search-result" element={<SearchResult searchString={searchString}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
