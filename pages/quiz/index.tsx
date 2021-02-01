import React from 'react';
import { GetServerSideProps } from 'next';

import db from '../../db.json';
import QuizPage from '../../src/pages/Quiz';

interface QuizProps {
  name?: string;
}
export default function Quiz({ name }: QuizProps) {
  return (
    <QuizPage
      bg={db.bg}
      githubRepository="https://github.com/EdlanioJ/aluraquiz"
      questions={db.questions}
      playerName={name}
    />
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  return {
    props: {
      name,
    },
  };
};
