import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../src/config/firebase';

export interface User {
  id: string;
  name: string;
  score: number;
  time: number;
}
export default async function score(
  _: NextApiRequest,
  response: NextApiResponse
) {
  const users: User[] = [];
  const usersCollection = await db
    .collection('users')
    .orderBy('score', 'desc')
    .orderBy('time', 'asc')
    .get();

  usersCollection.docs.forEach((doc) => {
    const data = doc.data();
    users.push({
      id: doc.id,
      name: data.name,
      score: data.score,
      time: data.time,
    });
  });

  response.setHeader('Access-Control-Allow-Methods', 'POST');
  response.json(users);
}
