"use client";

import { useState } from "react";
import { choose, firstNames, lastNames } from "./data";

export default function Home() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const generateName = () => {
    setFirstName(choose(firstNames));
    setLastName(choose(lastNames));
  };

  const handleCopy = () => {
    const fullName = `${firstName} ${lastName}`;
    navigator.clipboard.writeText(fullName);
  };

  return (
    <div className="bg-sky-50 min-h-screen p-3 justify-center items-center flex">
      <div className="bg-white rounded-md border border-sky-300 p-3 gap-3 flex flex-col">
        <button className="btn" onClick={generateName}>
          Generate
        </button>
        <input
          className="input"
          type="text"
          value={firstName}
          placeholder="User's first name..."
          readOnly
          onClick={() => navigator.clipboard.writeText(firstName)}
        />
        <input
          className="input"
          type="text"
          value={lastName}
          placeholder="User's last name..."
          readOnly
          onClick={() => navigator.clipboard.writeText(lastName)}
        />
        <button className="btn" onClick={handleCopy}>
          Copy
        </button>
      </div>
    </div>
  );
}
