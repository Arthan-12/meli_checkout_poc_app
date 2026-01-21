import { useLogin } from '@/hooks/login/UseLogin';
import { LoginRequest } from '@/models/requests/LoginRequest';
import { labelClass, inputClass, errorClass, buttonClass } from '@/styles/form';
import { loginSchema } from '@/validators/login/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type LoginFormData = LoginRequest;

function Login() {
  const navigate = useNavigate();
  const {
    data: loginData,
    mutate: loginAction,
    isError: isLoginError,
    isPending: isLoginLoading,
    isSuccess: isLoginSuccess,
  } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  function onSubmit(data: LoginRequest) {
    console.log('Logado');
    loginAction(data);
  }

  useEffect(() => {
    if (isLoginSuccess) {
      localStorage.setItem('authToken', loginData.token);
      navigate('/home');
    }
  }, [isLoginSuccess]);

  if (isLoginError) return <div>Ocorreu um erro ao cadastrar o usuário</div>;
  if (isLoginLoading) return <div>Criando novo usuário...</div>;
  if (isLoginSuccess) {
    navigate('/home');
  }

  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <div className="mb-4">
          <label className={labelClass}>Email</label>
          <input {...register('email')} className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className={labelClass}>Password</label>
          <input
            type="password"
            {...register('password')}
            className={inputClass}
          />
          {errors.password && (
            <p className={errorClass}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} className={buttonClass}>
          {isSubmitting ? 'Signing in...' : 'Login'}
        </button>
      </form>
      <div>
        <p>Não possui conta?</p>
        <Link to={'/signup'}>Cadastre-se</Link>
      </div>
    </div>
  );
}
export default Login;
