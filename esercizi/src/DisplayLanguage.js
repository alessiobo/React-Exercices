// Consume the LanguageContext within the DisplayLanguage component 
// by using the context consumer, and show the selected language in an h1 tag.

import React from 'react'
import { LanguageContext } from './LanguageContext'

const String = {
    en: {
        greetings: "Hello and welcome to this webpage"
    },
    it: {
        greetings: "Ciao e benvenuto su questa pagina web"
    }
}

class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
        { (language) =>(
            <h1>{String[language].greetings}</h1>
        )}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default DisplayLanguage
