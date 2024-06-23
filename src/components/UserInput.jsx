import { useState } from "react";

export default function UserInput({ onInvestmentParameterChange }) {
  const handleInput = (event) => {
    onInvestmentParameterChange(event.target.id, event.target.value)
  }

  return (
    <section id="user-input">
      <p className="input-group">
        <div>
          <label >Initial Investment</label>
          <input id="initial-investment" onChange={handleInput} type="text" />
        </div>

        <div>
          <label >Annual Investment</label>
          <input id="annual-investment" onChange={handleInput} type="text" />
        </div>
      </p>

      <p className="input-group">
        <div>
          <label >Expected Return</label>
          <input id="expected-return" onChange={handleInput} type="text" />

        </div>

        <div>
          <label >Duration</label>
          <input id="duration" onChange={handleInput} type="text" />
        </div>
      </p>
    </section>
  );
}