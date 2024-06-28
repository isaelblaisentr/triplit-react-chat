import { ReactNode } from 'react';
import { Card } from '@material-tailwind/react';

interface ILayoutProps {
  children: NonNullable<ReactNode>;
}
export function Page({ children }: ILayoutProps) {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full overflow-y-auto shadow-xl shadow-blue-gray-900/5 p-6">
      {children}
    </Card>
  );
}
