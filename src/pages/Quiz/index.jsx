import React from 'react'
import './quiz.css'

const Quiz = () => {
  return (
    <>
      <h1>Question 1</h1>
        <div className='ans'>
          <div>
            <p className='ans-1'>answer 1</p>
            <p>answer 2</p>
          </div>
          <div>
            <p className='ans-2'>answer 3</p>
            <p>answer 4</p>
          </div>
          
        </div>
        <button>Submit</button>
    </>
    
  )
}

export default Quiz