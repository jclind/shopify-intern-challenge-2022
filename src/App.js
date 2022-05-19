import React, { useEffect } from 'react'
import FormContainer from './Components/FormContainer/FormContainer'

function App() {
  const fetchData = async () => {
    fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_}`,
      },
      // body: '{\n  "prompt": "Summarize this for a second-grade student:\\n\\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",\n  "temperature": 0.7,\n  "max_tokens": 64,\n  "top_p": 1.0,\n  "frequency_penalty": 0.0,\n  "presence_penalty": 0.0\n}',
      body: JSON.stringify({
        prompt:
          'Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.',
        temperature: 0.7,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    })
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log(json)
      })
  }
  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <div className='app'>
      <FormContainer />
    </div>
  )
}

export default App
