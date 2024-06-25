import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  let shouldCalculate = false;

  const updateuserInput = (inputId, newValue) => {
    setuserInput(prevParameters => {

      // Get get the corresponding key for the input component
      let key = '';
      switch (inputId) {
        case 'initial-investment': key = 'initialInvestment'; break;
        case 'annual-investment': key = 'annualInvestment'; break;
        case 'expected-return': key = 'expectedReturn'; break;
        case 'duration': key = 'duration'; break;
        default: break;
      }

      const updatedInvestmentParams = { ...prevParameters };
      updatedInvestmentParams[key] = +newValue;

      return updatedInvestmentParams;
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={updateuserInput} />
      <ResultTable userInput={userInput} />
    </>
  )
}

export default App