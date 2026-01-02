import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { User } from 'src/models/User';
import { userKeys } from 'src/services/users/UserQueries';
import { userService } from 'src/services/users/UserService';

/* GET ALL USERS */
export function useUsers() {
  return useQuery({
    queryKey: userKeys.list(),
    queryFn: () => userService.getAllUsers(),
  });
}

/* GET USER BY ID */
export function useUser(id: number) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getUserById(id),
    enabled: !!id,
  });
}

/* CREATE USER */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: Partial<User>) => userService.createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.list(),
      });
    },
  });
}

/* UPDATE USER */
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: User) => userService.updateUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.list(),
      });
    },
  });
}

/* DELETE USER */
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userService.deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userKeys.list(),
      });
    },
  });
}
