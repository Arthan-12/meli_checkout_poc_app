import { User } from 'src/models/User';
import UserTable from './../../components/users/UserTable';
import { useEffect, useState } from 'react';
import { userService } from 'src/services/users/UserService';
import { useDeleteUser, useUsers } from 'src/hooks/users/UseUsers';

function Users() {
  const { data: users, isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load users</p>;

  return (
    <div className="p-6 min-w-full">
      <h1>Users</h1>
      <UserTable
        users={users || []}
        onInfo={(u) => console.log('Info:', u)}
        onEdit={(u) => console.log('Edit:', u)}
        onDelete={(u) => console.log('Delete:', u)}
      />
    </div>
  );
}

export default Users;
