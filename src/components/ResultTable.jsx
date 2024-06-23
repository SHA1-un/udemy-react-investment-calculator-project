// import { useState } from "react";
import Result from "./Result";

export default function ResultTable({ results }) {
  // const [totalInterest, setTotalInterest] = useState(0);
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