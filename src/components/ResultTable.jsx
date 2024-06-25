import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment";

function areAllParamsEntered(userInput) {
  let allParamsEntered = true;
  for (const [key] of Object.entries(userInput)) {
    const value = userInput[key];
    if (!value) {
      allParamsEntered = false;
      break;
    }
  }

  return allParamsEntered;
}

export default function ResultTable({ userInput }) {
  let results = [];
  if (areAllParamsEntered(userInput)) {
    results = calculateInvestmentResults(userInput);
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result => {
          return <Result result={result}/>
        })}
      </tbody>
    </table>
  );
}