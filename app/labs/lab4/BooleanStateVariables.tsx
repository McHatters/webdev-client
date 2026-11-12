"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [saved, setSaved] = useState(false);
  const [urgent, setUrgent] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
          id="wd-boolean-checkbox"
        />
        Done
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={saved}
          onChange={() => setSaved(!saved)}
          id="wd-boolean-saved"
        />
        Saved
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={urgent}
          onChange={() => setUrgent(!urgent)}
          id="wd-boolean-checkbox-2"
        />
        Urgent
      </label>
      {done && <div className="mt-2 rounded bg-yellow-100 p-2">Yay! Done</div>}
      {urgent && <div className="mt-2 rounded bg-red-100 p-2">REALLY URGENT UH OH</div>}
      {saved && <div>Saved</div>}
      <hr />
    </div>
  );
}