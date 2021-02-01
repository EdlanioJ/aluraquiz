import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import QuizPage from '../../src/pages/Quiz';

type DBType = typeof db;

interface OtherQuizProps {
  externDb: DBType;
  github: string;
}
const OtherQuiz: NextPage<OtherQuizProps> = ({ externDb, github }) => {
  return (
    <ThemeProvider theme={externDb.theme}>
      <Head>
        <title>{externDb.title}</title>
      </Head>
      <QuizPage
        questions={externDb.questions}
        bg={externDb.bg}
        githubRepository={github}
      />
    </ThemeProvider>
  );
};

export default OtherQuiz;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  const [githubName, githubRepository] = id.split('___');

  try {
    const response = await axios.get<DBType>(
      `https://${githubRepository}.${githubName}.vercel.app/api/db`
    );

    const github = `https://github.com/${githubName}/${githubRepository}`;
    return {
      props: {
        externDb: response.data,
        githubRepository: github,
      },
    };
  } catch (err) {
    context.res.writeHead(302, { Location: '/' });
    context.res.end();

    return { props: {} };
  }
};
