import { triplit } from '../../triplit/client.ts';
import { useQuery } from '@triplit/react';
import { Entity } from '@triplit/client';
import { schema } from '../../triplit/schema.ts';

type User = Entity<typeof schema, 'users'>;

export default function useUsers(): { users: Map<string, User>; errors: any } {
  const usersQuery = triplit.query('users').order('created_at', 'DESC');
  const { results: users, error } = useQuery(triplit, usersQuery);
  return { users, error };
}
