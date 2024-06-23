export default function Result({ result }) {
  const {year, valueEndOfYear, interest, totalInterestYearToDate, annualInvestment} = result;
  return (
    <tr>
      <td>{year}</td>
      <td>{valueEndOfYear}</td>
      <td>{interest}</td>
      <td>{totalInterestYearToDate}</td>
      <td>{annualInvestment}</td>
    </tr>
  )
}