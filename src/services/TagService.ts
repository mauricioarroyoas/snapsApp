import axios from 'axios';
import { Tag } from '../models/Tag';
const BASE_URL = 'http://localhost:3000/tag';

export async function fetchTags(): Promise<Tag[]> {
  const response = await axios.get(BASE_URL);
  return response.data;
}
