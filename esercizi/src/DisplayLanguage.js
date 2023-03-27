// Create a LanguageContext and wrap a DisplayLanguage component within its provider.
// Add a select tag to the component containing the DisplayLanguage component that allows
// the user to select the language, and pass it as a value to the Provider.

import React from "react";
import { LanguageContext } from "./LanguageContext";

const String = {
  en: {
    greetings: "Hello and welcome on this webpage",
  },
  it: {
    greetings: "Ciao e benvenuto su questa pagina web",
  },
};

class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => <div>{String[language].greetings}</div>}
        </LanguageContext.Consumer>
      </div>
    );
  }
}

export default DisplayLanguage;
