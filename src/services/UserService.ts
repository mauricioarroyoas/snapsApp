import axios from 'axios';
import { User } from '../models/User';
const BASE_URL = 'http://localhost:3000/user';

export async function assignTagsToUser(
  userId: string,
  tagIds: string[],
): Promise<User> {
  const response = await axios.patch(`${BASE_URL}/${userId}/tags`, { tagIds });
  return response.data;
}
