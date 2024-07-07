import { Entity } from '@triplit/client';
import { schema } from '../schema';

type User = Entity<typeof schema, 'users'>;

export default function seed(): {
  messages: any[];
  conversations: any[];
  users: User[];
} {
  return {
    users: [
      {
        email: 'blais.isael@test.com',
        password: 'Pass1234',
        firstName: 'Isael',
        lastName: 'Blais',
      },
      {
        email: 'jean.claude@test.com',
        password: 'Pass1234',
        firstName: 'Jean',
        lastName: 'Claude',
      },
    ],
    conversations: [],
    messages: [],
  };
}
