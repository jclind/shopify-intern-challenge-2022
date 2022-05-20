import React from 'react'

const PromptHistoryItem = ({ prompt }) => {
  console.log(prompt)
  return (
    <div>
      <div>id: {prompt.id}</div>
      <div>prompt: {prompt.prompt}</div>
      <div>response: {prompt.choices[0].text}</div>
    </div>
  )
}

export default PromptHistoryItem
