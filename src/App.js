import React, { useState, useEffect } from 'react'
import FormContainer from './Components/FormContainer/FormContainer'
import PromptHistoryContainer from './Components/PromptHistoryContainer/PromptHistoryContainer'

function App() {
  const [promptHistory, setPromptHistory] = useState([])

  const addPrompt = promptData => {
    console.log(promptData)
    setPromptHistory([...promptHistory, promptData])
  }

  return (
    <div className='app'>
      <FormContainer promptHistory={promptHistory} addPrompt={addPrompt} />
      <PromptHistoryContainer promptHistory={promptHistory} />
    </div>
  )
}

export default App
