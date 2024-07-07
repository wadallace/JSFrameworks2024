import { createContext, useState } from "react";

/**
 * I'm initializing the Context API here.
 * Every component that either sets or gets something from the Context API will need to import this.
 */
export const TranslatorContext = createContext();

/**
 * I'm storing "language" and "setLanguage" in the Context API.
 * Now any descendant component can access "language" and "setLanguage" through the Context API.
 */
export function TranslatorProvider({ children }) {
  const [language, setLanguage] = useState("en");
  return (
    <TranslatorContext.Provider value={[language, setLanguage]}>
      {children}
    </TranslatorContext.Provider>
  );
}
