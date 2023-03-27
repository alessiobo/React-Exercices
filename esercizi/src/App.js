import React, { useState } from "react";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [lan, setLan] = useState("en");

  const languageChangeHandler = (ev) => {
    const { value } = ev.target;

    setLan(value);
  };

  return (
    <div>
      <select value={lan} onChange={languageChangeHandler}>
        <option value={"en"}>ENGLISH</option>
        <option value={"it"}>ITALIANO</option>
      </select>
      <LanguageContext.Provider value={lan}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
