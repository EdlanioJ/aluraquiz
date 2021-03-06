import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { Repository } from './api/related';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import QuizContainer from '../src/components/QuizContainer';

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
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            {db.description.split('. ').map((desc, key) => (
              <p key={key.toString()}>{desc}.</p>
            ))}
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                value={name}
                autoCapitalize=""
                min={3}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Diz aí seu nome pra jogar :)"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
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
              {repositories.map((repo) => {
                const [githubName, githubRepository] = repo.fullName.split('/');
                return (
                  <li key={repo.id}>
                    <Link href={`/quiz/${githubName}___${githubRepository}`}>
                      <span>{repo.fullName}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EdlanioJ/aluraquiz" />
    </QuizBackground>
  );
}
