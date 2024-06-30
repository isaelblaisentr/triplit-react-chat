import { ClientSchema, Schema as S } from '@triplit/client';

/**
 * Define your schema here. After:
 * - Pass your schema to your Triplit client
 * - Push your schema to your Triplit server with 'triplit schema push'
 *
 * For more information about schemas, see the docs: https://www.triplit.dev/docs/schemas
 */
export const schema = {
  users: {
    schema: S.Schema({
      id: S.Id(),
      email: S.String(),
      password: S.String(),
      firstName: S.String(),
      lastName: S.String(),
      created_at: S.Date({ default: S.Default.now() }),
    }),
  },
  conversations: {
    schema: S.Schema({
      id: S.Id(),
      title: S.String(),
      created_at: S.Date({ default: S.Default.now() }),
      user_ids: S.Set(S.String()),
      users: S.RelationMany('users', {
        where: [['id', 'in', '$user_ids']],
      }),
    }),
  },
  messages: {
    schema: S.Schema({
      id: S.Id(),
      content: S.String(),
      user_id: S.String(),
      user: S.RelationById('users', '$user_id'),
      conversation_id: S.String(),
      conversation: S.RelationById('conversations', '$conversation_id'),
      created_at: S.Date({ default: S.Default.now() }),
    }),
  },
} satisfies ClientSchema;
