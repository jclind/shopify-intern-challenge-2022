import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import { toast } from 'react-toastify'
import { AiOutlineRight } from 'react-icons/ai'

import './FormContainer.scss'

const FormContainer = ({ addPrompt }) => {
  const [loading, setLoading] = useState(false)

  // Make call to OpenAI and return response
  const fetchPromptResponse = async prompt => {
    return await fetch(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          prompt,
          temperature: 0,
          max_tokens: 200,
        }),
      }
    )
      .then(res => {
        if (res.status >= 400 && res.status < 600) {
          Promise.reject('Bad response from server')
        }
        return res.json()
      })
      .then(res => {
        return { data: { ...res, prompt }, err: null }
      })
      .catch(err => {
        return { err: err.message }
      })
  }

  // Handles prompt submission errors and calls fetchPromptResponse and addResponse if no error
  const handlePromptFormSubmit = async (prompt, setPrompt) => {
    setLoading(true)
    // Show error if prompt is submitted with no length
    if (prompt.length <= 0) {
      setLoading(false)
      return toast.error('Prompt must be 1 or more characters long')
    }
    if (prompt.length > 1000) {
      setLoading(false)
      return toast.error('Prompt must be 1000 characters or less')
    }

    // Fetch prompt response from api
    const response = await fetchPromptResponse(prompt)

    // Catch possible fetch errors
    if (response.err) {
      return toast.error(response.err)
    }

    addPrompt(response.data)
    setPrompt('') // Clear form on submit
    setLoading(false)
  }

  return (
    <div className='form-container'>
      <h1 className='title'>Fun with GPT-3 AI</h1>
      <p className='description'>
        Input a text prompt and OpenAI will return a response that attempts to
        answer/match your prompt. E.g. with prompt "Write a tagline for an ice
        cream shop." the AI will return "We serve up smiles with every scoop!"
        or a similar answer.{' '}
        <a
          href='https://beta.openai.com/docs/guides/completion'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More <AiOutlineRight className='icon' />
        </a>
      </p>
      <FormInput
        handlePromptFormSubmit={handlePromptFormSubmit}
        loading={loading}
      />
    </div>
  )
}

export default FormContainer
