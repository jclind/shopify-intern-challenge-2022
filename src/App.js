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
  const [promptHistory, setPromptHistory] = useState([
    {
      id: 'cmpl-5A07d5APfRL43zwVp0p5sTeZd1lHy1',
      object: 'text_completion',
      created: 1653065433,
      model: 'text-davinci:002',
      choices: [
        {
          text: '\n\nThere are many ways to make a cake, but the most common way is to mix together flour, sugar, eggs, and butter, and then bake the mixture in an oven.',
          index: 0,
          logprobs: null,
          finish_reason: 'stop',
        },
      ],
      prompt: 'How do I make a cake?',
    },
    {
      id: 'cmpl-5A07d5APfRL43zwVp0p5sTeZd1lHy2',
      object: 'text_completion',
      created: 1653065433,
      model: 'text-davinci:002',
      choices: [
        {
          text: '\n\nThere are many ways to make a cake, but the most common way is to mix together flour, sugar, eggs, and butter, and then bake the mixture in an oven.',
          index: 0,
          logprobs: null,
          finish_reason: 'stop',
        },
      ],
      prompt: 'How do I make a cake?',
    },
    {
      id: 'cmpl-5A07d5APfRL43zwVp0p5sTeZd1lHy3',
      object: 'text_completion',
      created: 1653065433,
      model: 'text-davinci:002',
      choices: [
        {
          text: '\n\nThere are many ways to make a cake, but the most common way is to mix together flour, sugar, eggs, and butter, and then bake the mixture in an oven.',
          index: 0,
          logprobs: null,
          finish_reason: 'stop',
        },
      ],
      prompt: 'How do I make a cake?',
    },
  ])
  const addPrompt = promptData => {
    console.log(promptData)
    setPromptHistory([...promptHistory, promptData])
  }
  const removePrompt = promptID => {
    setPromptHistory(promptHistory.filter(prompt => prompt.id !== promptID))
  }

  // Dark mode toggle bool
  const [isDark, setIsDark] = useState(true)

  return (
    // <ToastProvider components={{ Toast: MyToast }}>
    <>
      <div className={isDark ? 'app dark-theme' : 'app light-theme'} id='app'>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
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
