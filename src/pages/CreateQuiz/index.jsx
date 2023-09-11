import React, {useState} from 'react'
import {CreateQuizForm} from '../../components';
import {Player} from '@lottiefiles/react-lottie-player';

export default function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [multiple, setMultipleCheckbox] = useState(false);
  const [truefalse, setTrueFalseCheckbox] = useState(false);

  return (
    <div>
        <h1 className='addquestiontitle'>Create a quiz</h1>
        <Player 
        className='lottie'
  autoplay
  loop={true}
  speed={3}
  src="https://lottie.host/582af552-174e-4e3b-a1eb-a18e0614c233/RXSiv3VUCD.json"
>
</Player>
<div className='form'>
        <CreateQuizForm quizTitle={quizTitle} setQuizTitle={setQuizTitle} question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} message={message} setMessage={setMessage} multiple={multiple} setMultipleCheckbox={setMultipleCheckbox} truefalse={truefalse} setTrueFalseCheckbox={setTrueFalseCheckbox}/>
        </div>
    </div>
  )
}
