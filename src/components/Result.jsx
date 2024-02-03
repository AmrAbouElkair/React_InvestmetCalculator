import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ input }) => {
  const result = calculateInvestmentResults(input);
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
        {result.map(
          ({
            annualInvestment,
            interest,
            valueEndOfYear,
            year,
            initialInvestment,
          }) => {
            const totalInterst =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterst;
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterst)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default Result;
