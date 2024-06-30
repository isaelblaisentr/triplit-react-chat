import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import Table from '../components/Table.tsx';
import { DateTime } from 'luxon';
import useConversations from '../hooks/useConversations.tsx';

import ConversationForm from '../components/conversations/conversationForm.tsx';

function Conversations() {
  const columnHeaders = ['id', 'title', '-'];
  const { conversations } = useConversations();
  const [conversationList, setConversationList] = useState([]);
  useEffect(() => {
    if (conversations) {
      console.log('conversations:', conversations);
      const conversationsMap = Array.from(
        conversations,
        ([, conversation]) => ({
          ...conversation,
          created_at: DateTime.fromJSDate(conversation.created_at).toFormat(
            'yyyy-LL-dd HH:mm'
          ),
        })
      );
      setConversationList(conversationsMap);
    }
  }, [conversations]);

  return (
    <Card shadow={false}>
      <CardHeader floated={false} shadow={false}>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Conversation List
        </Typography>
      </CardHeader>
      <CardBody className="text-center">
        <ConversationForm />
        <Table columnHeaders={columnHeaders} rows={conversationList} />
      </CardBody>
    </Card>
  );
}

export default Conversations;
