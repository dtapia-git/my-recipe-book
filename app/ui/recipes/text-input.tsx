import { useState } from "react";

export default function TextInput() {
    let [isFocused, setIsFocused] = useState(true);

   function handleOnFocus() {
    setIsFocused(true);
   }

    return (
        <div>
            <p>hello</p>
            <input type="text" name="textInput" onFocus={handleOnFocus}></input>
            <div>{isFocused ? 
            (<div className="flex justify-between"><button>Cancel</button><button>Done</button></div>) 
            : 
            (<div></div>)}</div>
        </div>
    );
}