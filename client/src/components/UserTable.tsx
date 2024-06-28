import { Typography } from '@material-tailwind/react';
import useUsers from '../hooks/useUsers.tsx';
import { useEffect, useState } from 'react';
import UserTableRow from './UserTableRow.tsx';

const TABLE_HEAD = ['id', 'email', 'firstName', 'lastName', 'created_at', ''];

export default function UserTable() {
  const { users } = useUsers();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (users) {
      console.log('Users value: ', users);
      const usersMap = Array.from(users, ([, user]) => user);
      setUserList(usersMap);
      console.log('Users has changed!: ', usersMap);
    }
  }, [users]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            const isLast = index === userList.length - 1;
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return <UserTableRow key={user.id} user={user} classes={classes} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
