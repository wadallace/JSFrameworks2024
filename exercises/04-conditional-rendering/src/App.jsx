import React from 'react'
import './App.css'
import AccordionSection from './AccordionSection'
import { content } from './content/accordion'

function App() {
  return (
    <>
      {content.map((item, index) => (
        <AccordionSection
          key={index}
          title={item.title}
          isOpen={item.isOpen}
          paragraph={item.paragraph}
        />
      ))}
    </>
  )
}

export default App
