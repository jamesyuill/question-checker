'use client';

import { useState } from 'react';
const answerDiv = document.getElementById('answer');

const chosenAlien = {
  name: 'klargon',
  colour: 'purple',
  horn_count: 2,
  eye_count: 3,
  eye_colour: 'red',
  hasAntenna: true,
  isFriendly: false,
  skinTexture: 'smooth',
};

const colourQuestion = [
  { checkFor: 'blue', question: 'is your alien blue?' },
  { checkFor: 'green', question: 'is your alien green?' },
  { checkFor: 'purple', question: 'is your alien purple?' },
];

const skinQuestion = [
  { checkFor: 'furry', question: 'does your alien have fur?' },
  { checkFor: 'scaly', question: 'does your alien have scales?' },
  { checkFor: 'smooth', question: 'is your alien smooth?' },
];

export default function Home() {
  const [answer, setAnswer] = useState(null);
  const [questionAsked, setQuestionAsked] = useState('');

  function questionChecker(alienProp, checkFor) {
    if (alienProp === checkFor) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // questionChecker('colour', questionAsked);
  }

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select
          id="question"
          name="question"
          value={questionAsked}
          onChange={(e) => {
            console.log(questionAsked);
            setQuestionAsked(e.target.value);
          }}
        >
          {colourQuestion.map((q) => {
            return <option key={q.checkFor}>{q.question}</option>;
          })}
        </select>
        <button id="submit">Submit Question</button>
      </form>
      <div id="answer">
        <p>{answer}</p>
      </div>
    </main>
  );
}
