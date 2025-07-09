import { User } from '../models/User';

export function getLoggedInUser(): User {
  const user: User = {
    id: 'ad2a582a-1d58-4cc5-a419-5d30fb501e5a',
    email: 'user@gmail.com',
  };

  return user;
}
