import React from 'react'
import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem'
import './PromptHistoryContainer.scss'

const PromptHistory = ({ promptHistory }) => {
  console.log(promptHistory)
  return (
    <div className='prompt-history'>
      {promptHistory.map(prompt => {
        return <PromptHistoryItem key={prompt.id} prompt={prompt} />
      })}
    </div>
  )
}

export default PromptHistory
