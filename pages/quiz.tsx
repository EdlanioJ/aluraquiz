import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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

export default function Quiz() {
  const [nameQuiz, setNameQuiz] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { name } = router.query;
    if (!name) router.push('/');

    setNameQuiz(name as string);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Página em Construção</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Olá {nameQuiz}, em breve Poderá dar continuidade a seu jogo,
              aguarde...
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EdlanioJ/aluraquiz" />
    </QuizBackground>
  );
}
