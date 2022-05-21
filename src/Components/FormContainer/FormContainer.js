import React, { useState, useEffect } from 'react'
import FormInput from '../FormInput/FormInput'
import { toast } from 'react-toastify'

import './FormContainer.scss'

const FormContainer = ({ addPrompt }) => {
  const [loading, setLoading] = useState(false)

  const fetchPromptResponse = async prompt => {
    return await fetch(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        // body: '{\n  "prompt": "Summarize this for a second-grade student:\\n\\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",\n  "temperature": 0.7,\n  "max_tokens": 64,\n  "top_p": 1.0,\n  "frequency_penalty": 0.0,\n  "presence_penalty": 0.0\n}',
        body: JSON.stringify({
          prompt,
          temperature: 0,
          max_tokens: 100,
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
    setPrompt('')
    setLoading(false)
  }

  return (
    <div className='form-container'>
      <h1 className='title'>Fun With OpenAI</h1>
      <p className='description'>
        Input a text prompt and OpenAI will return a response that attempts to
        answer/match your prompt. E.g. with prompt "Write a tagline for an ice
        cream shop." the AI will return "We serve up smiles with every scoop!"
        or a similar answer.
      </p>
      <FormInput
        handlePromptFormSubmit={handlePromptFormSubmit}
        loading={loading}
      />
    </div>
  )
}

export default FormContainer
