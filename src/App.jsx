import Header from "./components/Header";
import Calculator from "./components/Calculator";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Header />
      <Calculator results={results}/>
      <ResultTable results={results}/>
    </div>
  )
}

export default App
