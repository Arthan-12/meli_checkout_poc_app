import { User } from '@/models/User';
import { userKeys } from '@/services/users/UserQueries';
import { userService } from '@/services/users/UserService';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

/* GET ALL USERS */
export function useGetUsers() {
  return useQuery({
    queryKey: userKeys.list(),
    queryFn: () => userService.getAllUsers(),
  });
}

/* GET USER BY ID */
export function useGetUser(id: number) {
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
    mutationFn: (user: Partial<User>) => userService.updateUser(user),
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
