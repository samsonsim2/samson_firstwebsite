import { useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import { useGlobalContext } from '../context/context'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useState, useRef } from 'react'

const Answer = ({ question }) => {
  const [open, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!open)
  }

  return (
    <>
      <article className='question-control'>
        <div className='question'>
          {question.question}
          <button className='question-btn' onClick={handleClick}>
            {open ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        <div className={`${open ? 'answer open' : 'answer'}`}>
          {question.answer}
        </div>
      </article>
    </>
  )
}

export default Answer
