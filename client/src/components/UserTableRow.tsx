import { DateTime } from 'luxon';
import { Typography } from '@material-tailwind/react';
import { Entity } from '@triplit/client';
import { schema } from '../../triplit/schema.ts';

type User = Entity<typeof schema, 'users'>;

export default function UserTableRow({
  user,
  classes,
}: {
  user: User;
  classes: string;
}) {
  const { id, email, firstName, lastName, created_at } = user;

  return (
    <tr key={id} className="even:bg-blue-gray-50/50">
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {id}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {email}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {firstName}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {lastName}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {DateTime.fromJSDate(created_at).toFormat('yyyy-LL-dd HH:mm')}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {id}
        </Typography>
      </td>
    </tr>
  );
}
