import { formatter } from "../util/investment";
export default function Result({ result }) {
  const {year, valueEndOfYear, interest, totalInterestYearToDate} = result;
  const investedCapital = valueEndOfYear - totalInterestYearToDate;
  return (
    <tr>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterestYearToDate)}</td>
      <td>{formatter.format(investedCapital)}</td>
    </tr>
  )
}