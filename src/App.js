import React, { useState, useEffect } from 'react'
import Footer from './Components/Footer/Footer'
import FormContainer from './Components/FormContainer/FormContainer'
import Navbar from './Components/Navbar/Navbar'
import PromptHistoryContainer from './Components/PromptHistoryContainer/PromptHistoryContainer'
import { ToastProvider } from 'react-toast-notifications'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { FaTimes } from 'react-icons/fa'

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

  // Dark mode toggle bool
  const [isDark, setIsDark] = useState(() => {
    const darkThemeLS = JSON.parse(localStorage.getItem('dark-theme'))
    console.log(darkThemeLS)
    if (darkThemeLS !== 'undefined') {
      return darkThemeLS
    }
    return true
  })
  // Toggle dark theme in local storage for persistent state
  const toggleIsDark = () => {
    localStorage.setItem('dark-theme', JSON.stringify(!isDark))
    setIsDark(!isDark)
  }

  return (
    // <ToastProvider components={{ Toast: MyToast }}>
    <>
      <div className={isDark ? 'app dark-theme' : 'app light-theme'} id='app'>
        <Navbar isDark={isDark} toggleIsDark={toggleIsDark} />
        <div className='page-content'>
          <FormContainer promptHistory={promptHistory} addPrompt={addPrompt} />
          <PromptHistoryContainer
            promptHistory={promptHistory}
            removePrompt={removePrompt}
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
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
    // </ToastProvider>
  )
}

export default App
