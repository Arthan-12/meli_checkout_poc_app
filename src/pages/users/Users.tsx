import { User, UserActions } from 'src/models/User';
import UserTable from './../../components/users/UserTable';
import { useState } from 'react';
import {
  useCreateUser,
  useDeleteUser,
  useUpdateUser,
  useGetUsers,
} from 'src/hooks/users/UseUsers';
import UserDialog from 'src/components/users/UserDialog';
import { Dialog } from 'src/components/shared/Dialog';

function Users() {
  const {
    data: users,
    isLoading,
    error,
    refetch: refetchUsers,
  } = useGetUsers();
  const deleteUser = useDeleteUser();
  const createUser = useCreateUser();
  const updateUser = useUpdateUser();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [userData, setUserData] = useState<Partial<User> | null>(null);
  const [userCurrentAction, setUserAction] = useState<UserActions>(null);

  function onConfirmUserData(userData: Partial<User>) {
    setUserData(userData);
    setDialogOpen(false);
    console.log(userData);
    if (userCurrentAction === 'CREATE') {
      createUser.mutate(userData);
    } else if (userCurrentAction === 'UPDATE') {
      updateUser.mutate(userData);
    }
    refetchUsers();
  }

  function openUserDialog(action: UserActions, data?: User) {
    setUserAction(action);
    setUserData(data ? data : null);
    setDialogOpen(true);
  }

  function deleteUserConfirmation() {
    deleteUser.mutate(userData?.id!);
    refetchUsers();
  }

  function deleteUserAction(user: User) {
    setUserAction('DELETE');
    setConfirmDialogOpen(true);
    setUserData(user);
  }

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro ao carregar usuários</p>;

  return (
    <div className="p-6 min-w-full">
      <h1>Lista de usuários</h1>
      <UserTable
        users={users || []}
        onInfo={(u) => openUserDialog('GET', u)}
        onEdit={(u) => openUserDialog('UPDATE', u)}
        onDelete={(u) => deleteUserAction(u)}
        onCreate={() => openUserDialog('CREATE')}
      />
      {isDialogOpen && (
        <UserDialog
          action={userCurrentAction}
          userData={userData}
          onConfirm={(data) => onConfirmUserData(data)}
          onClose={() => setDialogOpen(false)}
        ></UserDialog>
      )}
      {isConfirmDialogOpen && (
        <Dialog
          title="Exclusão de usuário"
          onClose={() => setConfirmDialogOpen(false)}
          actionButtons={true}
          onConfirm={deleteUserConfirmation}
        >
          <span>Deseja confirmar a exclusão do usuário {userData?.name}?</span>
        </Dialog>
      )}
    </div>
  );
}

export default Users;
