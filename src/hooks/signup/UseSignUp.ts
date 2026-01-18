import { useMutation } from '@tanstack/react-query';
import { SignUpRequest } from './../../models/requests/SignUpRequest';
import { authApi } from '@/services/auth/authApi';
import { AuthResponse } from '@/models/responses/AuthResponse';

export function useSignUp() {
  return useMutation({
    mutationFn: (req: SignUpRequest) => authApi.signUp(req),
    onSuccess: (data: AuthResponse) => {
      console.log('usuário criado!');
      console.log(data);
    },
    onError: () => console.log('Falha ao tentar criar o usuário'),
  });
}
