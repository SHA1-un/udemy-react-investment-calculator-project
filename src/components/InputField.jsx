export default function InputField({ componentId, inputLabel, handleInput, inputType }) {
  return (
    <div>
      <label >{inputLabel}</label>
      <input id={componentId} onChange={handleInput} type={inputType} min="0"/>
    </div>
  )
}