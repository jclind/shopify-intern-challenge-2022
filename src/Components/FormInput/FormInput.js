import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import './FormInput.scss'

const FormInput = ({ handlePromptFormSubmit, loading }) => {
  const [promptVal, setPromptVal] = useState('')

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
          onChange={e => setPromptVal(e.target.value)}
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
