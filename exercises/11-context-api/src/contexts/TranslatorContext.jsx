import { createContext, useState } from 'react'

/**
 * I'm initializing the Context API here.
 * Every component that either sets or gets something from the Context API will need to import this.
 */
export const TranslatorContext = createContext()

export function TranslatorProvider({ children }) {
  const [language, setLanguage] = useState('en')
  return (
    <TranslatorContext.Provider value={[language, setLanguage]
    }>
      {children}
    </TranslatorContext.Provider>
  )
}
