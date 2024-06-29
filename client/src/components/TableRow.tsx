import { Typography } from '@material-tailwind/react';
import React from 'react';
/*import { Entity } from '@triplit/client';
import { schema } from '../../triplit/schema.ts';
type User = Entity<typeof schema, 'users'>;*/

export default function TableRow({
  rowId,
  row,
  columnHeaders,
  classes,
}: {
  rowId: string | number;
  row: any;
  columnHeaders: Array<string>;
  classes: string;
}) {
  return (
    <tr key={rowId} className="even:bg-blue-gray-50/50">
      {columnHeaders.map((head) => (
        <React.Fragment key={head}>
          {row[head] ? (
            <td key={head} className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {row[head]}
              </Typography>
            </td>
          ) : (
            <td key={head} className={classes}></td>
          )}
        </React.Fragment>
      ))}
    </tr>
  );
}
