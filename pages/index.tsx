import styled from 'styled-components';
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { Repository } from './api/related';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setName] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const router = useRouter();

  async function handleAddRepo() {
    const response = await axios.get<Repository[]>('/api/related');
    const { data } = response;

    const result: Repository[] = [];

    while (result.length < 3) {
      const temp = data[Math.floor(Math.random() * data.length)];

      result.push(temp);
    }

    setRepositories(result);
  }

  useEffect(() => {
    handleAddRepo();
  }, []);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  }
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                autoCapitalize=""
                min={3}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Diz aí seu nome pra jogar :)"
              />
              <button type="submit" disabled={name.length === 0}>
                <span>Jogar</span>
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>
              Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
              React fez:
            </p>
            <ul>
              {repositories.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.url} rel="noreferrer" target="_blank">
                    <span>{repo.fullName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EdlanioJ/aluraquiz" />
    </QuizBackground>
  );
}
