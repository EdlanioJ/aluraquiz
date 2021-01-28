import React, { FormEvent, useState } from 'react';
import { questions } from '../../../../db.json';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import Widget from '../../../components/Widget';

type Question = typeof questions[0];

interface QuestionWidgetProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: Function;
  addResult: Function;
}
export default function QuestionWidget({
  questionIndex,
  totalQuestions,
  question,
  onSubmit,
  addResult,
}: QuestionWidgetProps) {
  const [selectedAlternative, setSelectedAlternative] = useState<number>();
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsQuestionSubmited(true);
    setInterval(() => {
      addResult(isCorrect);
      onSubmit();
      setIsQuestionSubmited(false);
      setSelectedAlternative(undefined);
    }, 3000);
  }
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          {isQuestionSubmited && isCorrect && <p>vc Acertou :)</p>}
          {isQuestionSubmited && !isCorrect && <p>Voce Errou!</p>}
        </Form>
      </Widget.Content>
    </Widget>
  );
}
