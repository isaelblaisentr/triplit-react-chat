import { Typography } from '@material-tailwind/react';
import TableRow from './TableRow.tsx';

export default function Table({
  columnHeaders,
  rows,
}: {
  columnHeaders: Array<string>;
  rows: Array<any>;
}) {
  return (
    <div className="shadow-md sm:rounded-lg p-15">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columnHeaders.map((head) => (
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
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return (
              <TableRow
                key={index}
                rowId={row.id}
                row={row}
                columnHeaders={columnHeaders}
                classes={classes}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
