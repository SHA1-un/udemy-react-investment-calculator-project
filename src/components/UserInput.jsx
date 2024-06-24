import InputField from "./InputField";

export default function UserInput({ onInvestmentParameterChange }) {
  const handleInput = (event) => {
    onInvestmentParameterChange(event.target.id, event.target.value)
  }

  return (
    <section id="user-input">
      <p className="input-group">
        <InputField componentId="initial-investment" inputLabel="Initial Investment" handleInput={handleInput} inputType="number" />
        <InputField componentId="annual-investment" inputLabel="Annual Investment" handleInput={handleInput} inputType="number" />
      </p>

      <p className="input-group">
        <InputField componentId="expected-return" inputLabel="Expected Return" handleInput={handleInput} inputType="number" />
        <InputField componentId="duration" inputLabel="Duration" handleInput={handleInput} inputType="number" />
      </p>
    </section>
  );
}