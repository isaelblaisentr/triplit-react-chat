import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Typography } from '@material-tailwind/react';
import { triplit } from '../../../triplit/client.ts';
import { useEffect, useState } from 'react';
import CheckboxList from '../CheckboxList.tsx';
import useUsers from '../../hooks/useUsers.tsx';

type Inputs = {
  title: string;
  users: Array<string>;
};

export default function ConversationForm() {
  const { users } = useUsers();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    if (users) {
      const usersMap = Array.from(users, ([, user]) => ({
        id: user.id,
        label: `${user.firstName} ${user.lastName}`,
      }));
      setUserList(usersMap);
    }
  }, [users]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('Conversation Form submit values: ', data);
    await triplit.insert('conversations', { title: data.title });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
    >
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Title
        </Typography>
        <Input
          size="lg"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: 'before:content-none after:content-none',
          }}
          {...register('title')}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          User Id
        </Typography>
        <CheckboxList name="users" register={register} list={userList} />
      </div>
      <Button type="submit" className="mt-6" fullWidth>
        Create
      </Button>
    </form>
  );
}
