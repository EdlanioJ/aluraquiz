import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/pages/Quiz/QuestionWidget';
import LoadingWidget from '../src/pages/Quiz/LoadingWidget';
import ResultWidget from '../src/pages/Quiz/ResultWidget';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function Quiz() {
  const totalQuestions = db.questions.length;
  const [results, setResults] = useState<boolean[]>([]);
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [, setNameQuiz] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];
  const router = useRouter();

  function addResult(result: boolean) {
    setResults([...results, result]);
  }
  useEffect(() => {
    const { name } = router.query;

    setNameQuiz(name as string);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function onSubmit() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={totalQuestions}
            onSubmit={onSubmit}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EdlanioJ/aluraquiz" />
    </QuizBackground>
  );
}
