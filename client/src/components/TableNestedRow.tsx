import { Typography } from '@material-tailwind/react';
import React from 'react';
import TableRow from './TableRow.tsx';

export default function TableNestedRow({
  rowId,
  rows,
  columnHeaders,
}: {
  rowId: string | number;
  rows: Array<any>;
  columnHeaders: Array<string>;
}) {
  return (
    <tr
      key={rowId}
      className="w-full overflow-hidden transition-[max-height] bg-blue-gray-50"
    >
      <td colSpan={10}>
        <table className="px-10 w-fit mx-auto">
          <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
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
            {Array.from(rows, ([, row], index) => {
              const isLast = index === rows.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <React.Fragment key={index}>
                  <TableRow
                    key={index}
                    rowId={row.id}
                    row={row}
                    columnHeaders={columnHeaders}
                    classes={classes}
                  />
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </td>
    </tr>
  );
}
