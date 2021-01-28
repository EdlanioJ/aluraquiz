import React from 'react';
import Widget from '../../../components/Widget';

interface ResultWidgetProps {
  results: boolean[];
}
export default function ResultWidget({ results }: ResultWidgetProps) {
  return (
    <Widget>
      <Widget.Header>Tela de resultado: </Widget.Header>

      <Widget.Content>
        <p>Você acertou {results.filter((value) => value).length} preguntas:</p>

        <ul>
          {results.map((result, index) => (
            <li key={index.toString()}>
              {`#${index + 1} `}Resultado:{' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
