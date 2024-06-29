import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import useUsers from '../hooks/useUsers.tsx';
import { useEffect, useState } from 'react';
import Table from '../components/Table.tsx';
import { DateTime } from 'luxon';

function Users() {
  const columnHeaders = [
    'id',
    'email',
    'firstName',
    'lastName',
    'created_at',
    '-',
  ];
  const { users } = useUsers();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (users) {
      const usersMap = Array.from(users, ([, user]) => ({
        ...user,
        created_at: DateTime.fromJSDate(user.created_at).toFormat(
          'yyyy-LL-dd HH:mm'
        ),
      }));
      setUserList(usersMap);
    }
  }, [users]);
  return (
    <Card shadow={false}>
      <CardHeader floated={false} shadow={false}>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          User List
        </Typography>
      </CardHeader>
      <CardBody className="text-center">
        <Table columnHeaders={columnHeaders} rows={userList} />
      </CardBody>
    </Card>
  );
}

export default Users;
