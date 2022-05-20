import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import './FormInput.scss'

const FormInput = ({ handlePromptFormSubmit, loading }) => {
  const [promptVal, setPromptVal] = useState('')

  // Fetches random sample prompt from samplePrompts.js array and enters it into the prompt form
  const generateSamplePrompt = () => {
    if (loading) {
      return toast.error('Please wait until previous request has returned.')
    }
    setPromptVal('How do I make a cake?')
  }

  const handleTextareaChange = e => {
    // Don't allow input when loading
    if (loading) return

    setPromptVal(e.target.value)
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
          onChange={handleTextareaChange}
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
          onClick={() => handlePromptFormSubmit(promptVal.trim(), setPromptVal)}
          disabled={loading}
        >
          {loading ? (
            <TailSpin
              heigth='25'
              width='25'
              color='white'
              arialLabel='loading'
              className='spinner'
            />
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </div>
  )
}

export default FormInput
