import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import Widget from '../../../components/Widget';
import { User } from '../../../../pages/api/score';

interface ResultWidgetProps {
  results: boolean[];
  name?: string;
  time?: number;
}

const ResultWidget: NextPage<ResultWidgetProps> = ({ results, name, time }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [disabled, setDisabled] = useState(false);
  const routes = useRouter();
  const { id } = routes.query;

  async function request() {
    const response = await axios.get<User[]>('/api/score');
    const { data } = response;

    setUsers([...data]);
  }

  async function save() {
    await axios.post('/api/score/add', {
      name,
      score: results.filter((value) => value).length,
      time,
    });
  }
  useEffect(() => {
    request();
  }, []);

  const handleSave = useCallback(() => {
    save();
  }, []);

  useEffect(() => {
    request();
    setDisabled(true);
  }, [handleSave]);

  return (
    <Widget>
      <Widget.Header>Resultado: </Widget.Header>

      <Widget.Content>
        <p>Mandou bem, {name}</p>
        <h1>
          Você fez {results.filter((value) => value).length * 10} pontos,
          parabéns!
        </h1>

        <Widget.List>
          {!id
            ? users.map((user, index) => {
                let color;
                if (index === 0) color = '#FFD628';
                if (index === 1) color = '#C8C0BE';
                if (index === 2) color = '#884F31';
                if (index > 2) color = '#3F51B5';

                return (
                  <Widget.ListItem key={user.id}>
                    <Widget.Row>
                      <Widget.Bubble bgColor={color}>{index + 1}</Widget.Bubble>
                      <div>
                        <h1>{user.name}</h1>
                      </div>
                    </Widget.Row>
                    <Widget.Col>
                      <h1>{user.score * 100}</h1>
                      <p>pontos</p>
                    </Widget.Col>
                  </Widget.ListItem>
                );
              })
            : results.map((result, index) => {
                return (
                  <li key={index.toString()}>
                    {`#${index + 1} `}Resultado:{' '}
                    {result === true ? 'Acertou' : 'Errou'}
                  </li>
                );
              })}
        </Widget.List>
        {!id && (
          <Button type="button" onClick={handleSave} disabled={disabled}>
            Adicionar ao meu projeto
          </Button>
        )}
        <Widget.LinkContainer>
          <Widget.Link href="/">Voltar para a home</Widget.Link>
        </Widget.LinkContainer>
      </Widget.Content>
    </Widget>
  );
};

export default ResultWidget;
