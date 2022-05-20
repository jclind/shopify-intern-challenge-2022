import React from 'react'
import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem'
import './PromptHistoryContainer.scss'

const PromptHistory = ({ promptHistory, removePrompt }) => {
  console.log(promptHistory)

  if (promptHistory.length <= 0) return null

  return (
    <div className='prompt-history-container'>
      <label>Prompt History:</label>
      <div className='prompts'>
        {promptHistory.map(prompt => {
          return (
            <PromptHistoryItem
              key={prompt.id}
              prompt={prompt}
              removePrompt={removePrompt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PromptHistory
