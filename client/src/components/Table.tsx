import React from 'react';
import { Typography } from '@material-tailwind/react';
import TableRow from './TableRow.tsx';
import TableNestedRow from './TableNestedRow.tsx';

export default function Table({
  columnHeaders,
  rows,
  isNested,
  nestedColumnHeaders,
  nestedProperty,
}: {
  columnHeaders: Array<string>;
  rows: Array<any>;
  isNested?: boolean;
  nestedColumnHeaders?: Array<any>;
  nestedProperty?: string;
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
              <React.Fragment key={row.id}>
                <TableRow
                  key={index}
                  rowId={row.id}
                  row={row}
                  columnHeaders={columnHeaders}
                  classes={classes}
                />
                {isNested && (
                  <TableNestedRow
                    key={`nested-${index}`}
                    rowId={`nested-${row.id}`}
                    rows={row[nestedProperty]}
                    columnHeaders={nestedColumnHeaders}
                  />
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
