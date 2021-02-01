import React, { useEffect, useState } from 'react';
import db from '../../../db.json';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import LoadingWidget from './LoadingWidget';
import QuestionWidget from './QuestionWidget';
import ResultWidget from './ResultWidget';

type QuestionType = typeof db.questions[0];
interface QuizPageProps {
  questions: QuestionType[];
  bg: string;
  githubRepository: string;
  playerName?: string;
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage: React.FC<QuizPageProps> = ({
  questions,
  bg,
  githubRepository,
  playerName,
}) => {
  const totalQuestions = questions.length;
  const [results, setResults] = useState<boolean[]>([]);
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [InitialTime, setInitialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);
  const question = questions[currentQuestion];

  function addResult(result: boolean) {
    setResults([...results, result]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
      setInitialTime(Number(new Date()));
    }, 1 * 1000);
  }, []);

  function onSubmit() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinalTime(Number(new Date()));
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
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
          <ResultWidget
            results={results}
            name={playerName}
            time={finalTime - InitialTime}
          />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={githubRepository} />
    </QuizBackground>
  );
};

export default QuizPage;
