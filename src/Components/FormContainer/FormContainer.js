import React, { useState } from 'react'
import './FormContainer.scss'
import FormInput from '../FormInput/FormInput'

const FormContainer = ({ addPrompt }) => {
  const [error, setError] = useState('')

  const fetchPromptResponse = async prompt => {
    console.log('1')
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
          max_tokens: 60,
        }),
      }
    )
      .then(res => {
        if (res.status >= 400 && res.status < 600) {
          throw new Error('Bad response from server')
        }
        console.log('2')
        return res.json()
      })
      .then(res => {
        console.log('3')
        return { data: { ...res, prompt }, err: null }
      })
      .catch(err => {
        console.log('4 error')
        return { err }
      })
  }

  // Handles prompt submittion errors and calls fetchPromptResponse and addResponse if no error
  const handlePromptFormSubmit = async prompt => {
    setError('')

    if (prompt.length <= 0) {
      console.log('error')
      return setError('Prompt must be 1 or more characters long.')
    }

    const response = await fetchPromptResponse(prompt)

    if (response.err) {
      console.log('err', response.err)
      return setError(response.err)
    }

    addPrompt(response.data)
    console.log(response, '5')
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
      <FormInput handlePromptFormSubmit={handlePromptFormSubmit} />
    </div>
  )
}

export default FormContainer
