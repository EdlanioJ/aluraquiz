import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import db from '../../../db.json';
import { QuizContainer } from '../../../pages';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import LoadingWidget from './LoadingWidget';
import QuestionWidget from './QuestionWidget';
import ResultWidget from './ResultWidget';

type QuestionType = typeof db.questions[0];
interface QuizPageProps {
  questions: QuestionType[];
  bg: string;
  githubRepository: string;
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
}) => {
  const totalQuestions = questions.length;
  const [results, setResults] = useState<boolean[]>([]);
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [nameQuiz, setNameQuiz] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = questions[currentQuestion];
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
          <ResultWidget results={results} name={nameQuiz} />
        )}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={githubRepository} />
    </QuizBackground>
  );
};

export default QuizPage;
