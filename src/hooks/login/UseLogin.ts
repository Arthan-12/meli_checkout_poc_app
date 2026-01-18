import { LoginRequest } from '@/models/requests/LoginRequest';
import { AuthResponse } from '@/models/responses/AuthResponse';
import { authApi } from '@/services/auth/authApi';
import { useMutation } from '@tanstack/react-query';

export function useLogin() {
  return useMutation({
    mutationFn: (req: LoginRequest) => authApi.login(req),
    onSuccess: (data: AuthResponse) => {
      console.log('logado');
      console.log(data);
    },
    onError: () => console.log('Falha ao tentar executar o login'),
  });
}
