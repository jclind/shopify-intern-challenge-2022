import React from 'react'
import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem'
import './PromptHistoryContainer.scss'

const PromptHistory = ({ promptHistory, removePrompt, clearHistory }) => {
  // Don't render anything if promptHistory is empty
  if (promptHistory.length <= 0) return null

  return (
    <div className='prompt-history-container'>
      <label>Prompt History:</label>
      <div className='prompts'>
        {promptHistory
          .slice()
          .reverse()
          .map(prompt => {
            return (
              <PromptHistoryItem
                key={prompt.id}
                prompt={prompt}
                removePrompt={removePrompt}
              />
            )
          })}
      </div>
      <button className='clear-prompt-btn' onClick={clearHistory}>
        Clear History
      </button>
    </div>
  )
}

export default PromptHistory
