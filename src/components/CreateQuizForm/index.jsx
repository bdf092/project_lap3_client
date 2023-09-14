
import React, { useState } from 'react';

const CreateQuizForm = ({ setMessage }) => {
  const [step, setStep] = useState(0);
  const [quizTitle, setQuizTitle] = useState('');
  const initialQuestions = Array.from({ length: 10 }, () => ({
    type: 'multiple_choice',
    difficulty: 'medium',
    question: '',
    answer_choices: ['', '', '', ''],
    correct_answer: '',
  }));
  const [questions, setQuestions] = useState(initialQuestions);


  const handleQuizTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleInputChange = (e, index, field) => {
    const newQuestions = [...questions];
    if (field === 'answer_choices') {
      // Handle answer choices differently
      newQuestions[index].answer_choices[e.target.dataset.index] = e.target.value;
    } else {
      newQuestions[index][field] = e.target.value;
    }
    setQuestions(newQuestions);
  };

  const handleNextClick = () => {
    if (step === 0 && quizTitle.trim() === '') {
      setMessage('Please enter a quiz title.');
    } else if (step > 0) {
      const currentQuestion = questions[step - 1];
  
      // Check if the question and correct answer are empty
      if (
        currentQuestion.question.trim() === '' ||
        currentQuestion.correct_answer.trim() === ''
      ) {
        setMessage('Please fill out the question and correct answer fields.');
        return;
      }
  
      // Check if any of the answer choices are empty
      for (let i = 0; i < currentQuestion.answer_choices.length; i++) {
        if (currentQuestion.answer_choices[i].trim() === '') {
          setMessage('Please fill out all answer choice fields.');
          return;
        }
      }
    }
  
    if (step < 5) {
      setStep(step + 1);
    }
    setMessage('');
  };
  

    const handleBackClick = () => {
        if (step > 0) {
            setStep(step - 1);
        }
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const validQuestions = questions.filter(
          (q) =>
            q.question.trim() !== '' &&
            q.correct_answer.trim() !== '' &&
            q.answer_choices.every((choice) => choice.trim() !== '')
        );
    
        if (quizTitle.trim() === '' || validQuestions.length < 10) {
          setMessage('Please enter a quiz title and fill out all fields for each question.');
          setTimeout(() => {
            setMessage('');
          }, 5000);
        } else {
          const requestBody = {
            title: quizTitle,
            questions: validQuestions.map((question) => {
              return {
                type: question.type,
                difficulty: question.difficulty,
                question: question.question,
                answer_choices: question.answer_choices,
                correct_answer: question.correct_answer,
              };
            }),
          };
    

          try {
            const response = await fetch('https://think-fast.onrender.com/quizzes/', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
    
            if (response.ok) {
              setMessage('Quiz created successfully.');
              setTimeout(() => {
                setMessage('');
                setQuizTitle('');
                setQuestions(initialQuestions);
              }, 5000);
            } else {
              setMessage('There was a problem in creating your quiz.');
              setTimeout(() => {
                setMessage('');
              }, 5000);
            }
          } catch (error) {
            console.error(error);
            setMessage('There was an error while communicating with the server.');
            setTimeout(() => {
              setMessage('');
            }, 5000);
          }
        }
      };
       
    return (
        <>
            <form onSubmit={handleSubmit}>
  {step === 0 && (
    <div>
      <input
        placeholder="Title of your quiz"
        id="quiz_title"
        value={quizTitle}
        type="text"
        className="quiz_title"
        onChange={handleQuizTitleChange}
      />
    </div>
  )}
  {questions.slice(step * 2, step * 2 + 2).map((question, index) => (
    <div key={index}>
      <br />
      <input
        placeholder={`Question ${step * 2 + index + 1}`}
        value={question.question}
        type="text"
        className="question"
        onChange={(e) => handleInputChange(e, step * 2 + index, 'question')}
      />

      {/* Modify the input fields for answer choices */}
      <div className="answer-choices">
        <input
          placeholder={`Answer Choice 1`}
          value={question.answer_choices[0]}
          type="text"
          className="answer-choice"
          onChange={(e) => handleInputChange(e, step * 2 + index, 'answer_choices')}
          data-index={0} // Add data-index attribute to identify the choice
        />
        <input
          placeholder={`Answer Choice 2`}
          value={question.answer_choices[1]}
          type="text"
          className="answer-choice"
          onChange={(e) => handleInputChange(e, step * 2 + index, 'answer_choices')}
          data-index={1} // Add data-index attribute to identify the choice
        />
        <input
          placeholder={`Answer Choice 3`}
          value={question.answer_choices[2]}
          type="text"
          className="answer-choice"
          onChange={(e) => handleInputChange(e, step * 2 + index, 'answer_choices')}
          data-index={2} // Add data-index attribute to identify the choice
        />
        <input
          placeholder={`Answer Choice 4`}
          value={question.answer_choices[3]}
          type="text"
          className="answer-choice"
          onChange={(e) => handleInputChange(e, step * 2 + index, 'answer_choices')}
          data-index={3} // Add data-index attribute to identify the choice
        />
      </div>

      <input
        placeholder={`Correct Answer ${step * 2 + index + 1}`}
        value={question.correct_answer}
        type="text"
        className="correct-answer"
        onChange={(e) => handleInputChange(e, step * 2 + index, 'correct_answer')}
      />
    </div>
  ))}
  <div id="buttons">
    {step > 0 && (
      <button type="button" id="back-button" onClick={handleBackClick}>
        Back
      </button>
    )}
    <button type="button" id="next-button" onClick={handleNextClick}>
      Next
    </button>
    {step === 4 && (
      <button type="submit" id="create-button">
        Create
      </button>
    )}
  </div>
</form>

        </>
    );
}

export default CreateQuizForm;
