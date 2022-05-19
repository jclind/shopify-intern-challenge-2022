import React from 'react'
import './FormContainer.scss'

const FormContainer = () => {
  return (
    <div className='form-container'>
      <h1 className='title'>Fun With OpenAI</h1>
      <p className='description'>
        Input a text prompt and OpenAI will return a response that attemps to
        answer/match your prompt. E.g. with prompt "Write a tagline for an ice
        cream shop.", the AI will return something like "We serve up smiles with
        every scoop!"
      </p>
      <div className='form'></div>
    </div>
  )
}

export default FormContainer
