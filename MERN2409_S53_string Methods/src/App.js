import React from "react";
import "./App.css";

function App() {
  let Aplahabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div>
      <h1>String Methods</h1>

      <button
        type="button"
        onClick={() => {
          console.log(Aplahabets.toLowerCase());
          console.log(Aplahabets.toUpperCase());
        }}
      >
        To Upper Case/to Lower case
      </button>

      <button
        type="button"
        onClick={() => {
          let firstname = "Manoj";
          let lastname = "Kumar";
          let fullname = firstname.concat(lastname);
          console.log(fullname);
          let fname = ` ${firstname} ${lastname}`;
          console.log(fname);
        }}
      >
        Concat
      </button>

      <button
        type="button"
        onClick={() => {
          let quote = "  Oh MY God!";
          console.log(`----->${quote}<-----`);
          console.log(`----->${quote.trim()}<-----`);
          console.log(`----->${quote.trimStart()}<-----`);
          console.log(`----->${quote.trimEnd()}<-----`);
        }}
      >
        trim/trimStart/trimEnd
      </button>

      <button
        type="button"
        onClick={() => {
          let quote = "  Oh MY God!";
          console.log(quote.padStart(50, "O"));
          console.log(quote.padEnd(50, "!"));
        }}
      >
        padStart/padEnd
      </button>

      <button
        type="button"
        onClick={() => {
          let Slogan = "Jai Bharat ";
          console.log(Slogan.repeat(500));
        }}
      >
        Repeat
      </button>

      <button
        type="button"
        onClick={() => {
          let str =
            "sai is a bright Student and sai is the topper of the class";
          console.log(str);
          console.log(str.replace("sai", "Rajesh"));
          console.log(str.replaceAll("sai", "Rajesh"));
        }}
      >
        Replace/ReplaceAll
      </button>

      <button
        type="button"
        onClick={() => {
          let quote =
            " India is my country and all Indians are my brothers and sisters";

          console.log(quote.split(" "));
        }}
      >
        Split
      </button>

      <button
        type="button"
        onClick={() => {
          let Aplahabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(Aplahabets.slice(5, 12));
          console.log(Aplahabets.substring(5, 12));
          console.log(Aplahabets.substr(5, 12));
        }}
      >
        slice/substsrting/substr
      </button>

      <button
        type="button"
        onClick={() => {
          Aplahabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          console.log(Aplahabets);
          console.log(Aplahabets.length);
          console.log(Aplahabets[4]);
          console.log(Aplahabets.at(5));
          console.log(Aplahabets.charAt(5));
        }}
      >
        Length
      </button>

      <button
        type="button"
        onClick={() => {
          Aplahabets =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*()-+_=abcdefghijklmnopqrstuvwxyz";
          for (let i = 0; i < Aplahabets.length; i++) {
            console.log(
              `${Aplahabets.charAt(i)} ---- ${Aplahabets.charCodeAt(i)}`
            );
          }
        }}
      >
        Char code At
      </button>

      <button
        type="button"
        onClick={() => {
          for (let i = 3077; i <= 3500; i++) {
            console.log(`${String.fromCharCode(i)}----${i}`);
          }
        }}
      >
        FromCharCode
      </button>

      <button
        type="button"
        onClick={() => {
          let Message = "Hello World";
          let lastword = Message.endsWith("World");
          let firstword = Message.startsWith("Hello");
          console.log(lastword);
          console.log(firstword);
        }}
      >
        Ends with/starts with
      </button>
    </div>
  );
}

export default App;
