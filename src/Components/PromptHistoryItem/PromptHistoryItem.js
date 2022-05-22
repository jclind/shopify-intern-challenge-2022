import React from 'react'
import { BiTrash } from 'react-icons/bi'
import './PromptHistoryItem.scss'

const PromptHistoryItem = ({ prompt, removePrompt }) => {
  return (
    <div className='prompt-history-item'>
      <div className='text-section prompt'>
        <label>Prompt:</label>
        <p className='text'>{prompt.prompt}</p>
      </div>
      <div className='text-section response'>
        <label>Response:</label>
        <p className='text'>{prompt.choices[0].text}</p>
      </div>
      <div className='item-actions'>
        <button
          type='button'
          className='delete'
          onClick={() => removePrompt(prompt.id)}
          aria-label='Delete'
        >
          <BiTrash className='icon' />
        </button>
      </div>
    </div>
  )
}

export default PromptHistoryItem
