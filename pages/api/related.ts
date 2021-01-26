import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseItem {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
}
interface ResponseJSON {
  total_count: number;
  items: ResponseItem[];
}

export interface Repository {
  id: number;
  name: string;
  fullName: string;
  url: string;
}

async function related(request: NextApiRequest, response: NextApiResponse) {
  const repositoriesResponse = await axios.get<ResponseJSON>(
    'https://api.github.com/search/repositories?q=topic:aluraquiz&per_page=300'
  );
  const { items } = repositoriesResponse.data;

  const repositories: Repository[] = items.map((item) => ({
    id: item.id,
    name: item.name,
    fullName: item.full_name,
    url: item.html_url,
  }));

  response.setHeader('Cache-Control', 's-maxage=22360, stale-while-revalidate');
  response.json(repositories);
}

export default related;
