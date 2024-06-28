import { Card } from '@material-tailwind/react';
import './App.css';
import UserTable from './components/UserTable.tsx';

function App() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <UserTable />
    </Card>
  );
}

export default App;
