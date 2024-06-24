import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from "./util/investment";

function areAllParamsEntered(investmentParameters) {
  let allParamsEntered = true;
  for (const [key] of Object.entries(investmentParameters)) {
    const value = investmentParameters[key];
    if (!value) {
      allParamsEntered = false;
      break;
    }
  }

  return allParamsEntered;
}

function App() {
  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const [results, setResults] = useState([]);
  let shouldCalculate = false;

  const updateInvestmentParameters = (inputId, newValue) => {
    setInvestmentParameters(prevParameters => {

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

      // Update the shouldCalculate variable
      shouldCalculate = areAllParamsEntered(updatedInvestmentParams);
      if (shouldCalculate) {
        console.log(updatedInvestmentParams)
        calculateResults(updatedInvestmentParams);
      }

      return updatedInvestmentParams;
    });
  }

  const calculateResults = (_investmentParameters) => {
    const results = calculateInvestmentResults(_investmentParameters);
    console.log(results)
    setResults(results);
  }

  return (
    <div>
      <Header />
      <UserInput onInvestmentParameterChange={updateInvestmentParameters} />
      <ResultTable results={results} />
    </div>
  )
}

export default App