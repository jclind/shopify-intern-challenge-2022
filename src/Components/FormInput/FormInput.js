import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './FormInput.scss'

const FormInput = ({ handlePromptFormSubmit }) => {
  const [promptVal, setPromptVal] = useState('')

  const handlePromptChange = e => {
    const newVal = e.target.value

    return setPromptVal(e.target.value)
  }

  // Fetches random sample prompt from samplePrompts.js array and enters it into the prompt form
  const generateSamplePrompt = () => {
    setPromptVal('How do I make a cake?')
  }

  return (
    <div className='form-input-container'>
      <label htmlFor='#prompt-input'>
        <textarea
          type='text'
          className='form-input'
          id='prompt-input'
          placeholder='Enter Prompt...'
          value={promptVal}
          onChange={handlePromptChange}
        />
      </label>
      <div className='prompt-actions'>
        <button
          type='button'
          className='generate-prompt-btn'
          onClick={generateSamplePrompt}
        >
          Sample Prompt
        </button>
        <button
          type='submit'
          className='btn submit-prompt-btn'
          onClick={() => handlePromptFormSubmit(promptVal.trim())}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default FormInput
