import { triplit } from '../../triplit/client.ts';
import { useQuery } from '@triplit/react';
import { Entity } from '@triplit/client';
import { schema } from '../../triplit/schema.ts';

type Conversation = Entity<typeof schema, 'conversations'>;

export default function useConversations(): {
  conversations: Map<string, Conversation>;
  errors: any;
} {
  const conversationsQuery = triplit
    .query('conversations')
    .order('created_at', 'DESC');
  const { results: conversations, error } = useQuery(
    triplit,
    conversationsQuery
  );
  return { conversations, error };
}
