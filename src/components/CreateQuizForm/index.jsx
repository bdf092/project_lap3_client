import React from 'react'

const CreateQuizForm = ({ quizTitle, setQuizTitle, question, setQuestion, answer, setAnswer, message, setMessage, truefalse, setTrueFalseCheckbox, multiple, setMultipleCheckbox}) => {

    function handleQuizTitle(e) {
        setQuizTitle(e.target.value)
    }
    
    function handleQuestion(e) {
        setQuestion(e.target.value)
    }

    function handleAnswer(e) {
        setAnswer(e.target.value)
    }

    function handleMultiple() {
        setMultipleCheckbox(!multiple)
    }

    function handleTrueFalse() {
        setTrueFalseCheckbox(!truefalse)
    }

   

   async function handleSubmit(e) {
        e.preventDefault();
        if (question.length > 0 && answer.length > 0 && quizTitle.length > 0) {
         await fetch('http://localhost:3000/quizzes', {
                method: 'POST',
                body: JSON.stringify({
                    quizTitle: quizTitle,
                    question: question,
                    answer: answer,
                    multiple_choice: multiple, 
                    truefalse: truefalse}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setMessage('Question created successfully.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            })
            .catch((err) => {
                console.log(err.message);
                setMessage('There was a problem in creating your question.');
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            });
            setQuestion('')
            setAnswer('')
        } else {
            setMessage('Please enter your question/answer.');
            setTimeout(() => {
                setMessage('')
            }, 5000)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input placeholder="Title of your quiz" id="quiz_title" value={quizTitle} type="text" className="quiz_title" onChange={handleQuizTitle}/>
            </div>
            <div>
                <input type="radio" name="quiztype" value="multiple" onChange={handleMultiple}/>
                <label htmlFor="multiple">Multiple Choice</label>
                <br></br>
                <input type="radio" name="quiztype" value="truefalse" onChange={handleTrueFalse}/>
                <label htmlFor="truefalse">True/False</label>
            </div>
            <div>
                <input placeholder="Question" id="question" value={question} type="text" className="question" onChange={handleQuestion}/>
            </div>
            <div>
                <input placeholder="Answer" id="answer" value={answer} type="text" className="answer" onChange={handleAnswer}/>
            </div>
                       
            <button type="submit" className="create-button">Create</button>
            <p className='message'>{message}</p>
        </form>
    )


}

export default CreateQuizForm


