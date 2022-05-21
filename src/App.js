import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import FormContainer from './Components/FormContainer/FormContainer'
import Navbar from './Components/Navbar/Navbar'
import PromptHistoryContainer from './Components/PromptHistoryContainer/PromptHistoryContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // Prompt History Data and Functionality
  const [promptHistory, setPromptHistory] = useState(() => {
    const promptHistoryLS = JSON.parse(localStorage.getItem('promptHistory'))
    if (promptHistoryLS) return promptHistoryLS
    return []
  })

  const savePromptHistory = data => {
    localStorage.setItem('promptHistory', JSON.stringify(data))
  }

  const addPrompt = promptData => {
    const updatedPromptHistory = [...promptHistory, promptData]
    setPromptHistory(updatedPromptHistory)
    savePromptHistory(updatedPromptHistory)
  }
  const removePrompt = promptID => {
    // Filter out prompt with passed id
    const updatedPromptHistory = promptHistory.filter(
      prompt => prompt.id !== promptID
    )
    setPromptHistory(updatedPromptHistory)
    savePromptHistory(updatedPromptHistory)
  }
  const clearHistory = promptID => {
    setPromptHistory([])
    savePromptHistory([])
  }

  // Dark mode toggle bool
  const [isDark, setIsDark] = useState(() => {
    const darkThemeLS = JSON.parse(localStorage.getItem('dark-theme'))
    if (darkThemeLS !== 'undefined' && darkThemeLS !== null) {
      return darkThemeLS
    }
    return true
  })
  // Toggle dark theme and hold state in local storage for persistence
  const toggleIsDark = () => {
    localStorage.setItem('dark-theme', JSON.stringify(!isDark))
    setIsDark(!isDark)
  }

  return (
    <>
      <div className={isDark ? 'app dark-theme' : 'app light-theme'} id='app'>
        <Navbar isDark={isDark} toggleIsDark={toggleIsDark} />
        <div className='page-content'>
          <FormContainer promptHistory={promptHistory} addPrompt={addPrompt} />
          <PromptHistoryContainer
            promptHistory={promptHistory}
            removePrompt={removePrompt}
            clearHistory={clearHistory}
          />
        </div>
        <Footer />
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme='colored'
      />
    </>
  )
}

export default App
