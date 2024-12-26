"use client";

import { useState } from "react";

export default function TextInput() {
  let [inputValue, setInputValue] = useState("");
  let [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleChange(event: any) {
    setInputValue(event.target.value);
  }

  function handleCancel() {
    setInputValue("");
    setIsFocused(false);
  }

  return (
    <div>
      <input
        type="text"
        name="textInput"
        value={inputValue}
        onFocus={handleOnFocus}
        onChange={handleChange}
        className="bg-slate-100 border-0 w-full"></input>
      {isFocused && (
        <div className="flex justify-between border-black border">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleBlur} style={{ color: "#009d94" }}>
            Done
          </button>
        </div>
      )}
    </div>
  );
}
