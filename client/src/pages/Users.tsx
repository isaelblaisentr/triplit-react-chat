import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import UserTable from '../components/UserTable.tsx';

function Users() {
  return (
    <Card shadow={false}>
      <CardHeader floated={false} shadow={false}>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          User List
        </Typography>
      </CardHeader>
      <CardBody className="text-center">
        <UserTable />
      </CardBody>
    </Card>
  );
}

export default Users;
