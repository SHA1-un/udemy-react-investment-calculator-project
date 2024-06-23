import { useState } from "react";

export default function Caculator({results}) {
  const [shouldCalculate, setShouldCalculate] = useState(false);

  return (
    <section id="user-input">
      <p className="input-group">
        <div>
          <label >Initial Investment</label>
          <input type="text" />
        </div>

        <div>
          <label >Annual Investment</label>
          <input type="text" />
        </div>
      </p>

      <p className="input-group">
        <div>
          <label >Expected Return</label>
          <input type="text" />
        </div>

        <div>
          <label >Duration</label>
          <input type="text" />
        </div>
      </p>
    </section>
  );
}