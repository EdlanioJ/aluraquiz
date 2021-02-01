import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../src/config/firebase';

export default async function add(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { name, score, time } = request.body;

  if (!name) {
    return response.status(400).send('name must be provided');
  }
  if (!score) {
    return response.status(400).send('score must be provided');
  }
  if (!time) {
    return response.status(400).send('time must be provided');
  }

  try {
    const users = db.collection('users');

    await users.doc().set({
      name,
      score,
      time,
    });
  } catch (error) {
    return response.status(500).send('server error');
  }

  return response.status(201).send('created');
}
