
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

const App = () => {
  const [chosenLevel, setChosenLevel] = useState(null);
  const [words, setWords] = useState(null)

  
  const getRandomWords = () => {
    var options = {
      method: 'GET',
      url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
      params: {level: chosenLevel, area: 'sat'},
      headers: {
        'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
        'x-rapidapi-key': ''
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data);
      setWords(response.data)
    }).catch((error) =>  {
      console.error(error);
    });
  }

  useEffect(() => {
    if(chosenLevel) getRandomWords()
  }, [chosenLevel])


  console.log(words)
  return (
    <div className="App">
      {!chosenLevel && <div className='level-selector'> 
        <h1>Word association App</h1>
        <p>Select your level to Start</p>
      <select 
        className='levels' 
        id='levels' 
        value={chosenLevel} 
        onChange={(e) => setChosenLevel(e.target.value)}>
        <option value={null}>Select a Level</option>
        <option value='1'>Level 1</option>
        <option value='2'>Level 2</option>
        <option value='3'>Level 3</option>
      </select>
      </div>}

      {chosenLevel && <div className="question-area">
        <h1>Welcome to Level : {chosenLevel}</h1>
        {words.quizlist.map(question => (<div className='question-box'>
          {question.quiz.map(tip => <p>{tip}</p>)}
          <div className='question-buttons'>
            {question.option.map(option => (
              <div className='que-btn'>
                  <button>{option}</button>
              </div>
            ))}
          </div>
          <p>{question.correct}</p>
        </div>))}

      </div>}
    </div>
  );
}

export default App;
