// Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext 
// through the useContext hook.

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function DisplayLanguage() {
  const tradution = {
    en: {
      TRAD: "language is: ",
    },
    it: {
      TRAD: "la lingua è in: ",
    },
  };
  
  const lan = useContext(LanguageContext);

  return (
    <div>
      <h1>
        {tradution[lan].TRAD} {lan}
      </h1>
    </div>
  );
}

export default DisplayLanguage;
