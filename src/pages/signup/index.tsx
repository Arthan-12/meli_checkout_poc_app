import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { labelClass, inputClass, errorClass, buttonClass } from '@/styles/form';
import { signupSchema } from '@/validators/signup/signupSchema';
import { useSignUp } from '@/hooks/signup/UseSignUp';
import { SignUpRequest } from '@/models/requests/SignUpRequest';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type SignupFormData = SignUpRequest;

function Signup() {
  const {
    mutate: signUpAction,
    isError: isSignUpError,
    isPending: isSignUpLoading,
    isSuccess: isSignUpSuccess,
  } = useSignUp();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  //   async function onSubmit(data: SignupFormData) {
  //     try {
  //       await authApi.signUp(data);
  //       alert("Account created successfully!");
  //     } catch {
  //       alert("Error creating account");
  //     }
  //   }

  function onSubmit(data: SignUpRequest) {
    console.log('Usuário criado');
    signUpAction(data);
  }

  if (isSignUpError) return <div>Ocorreu um erro ao cadastrar o usuário</div>;
  if (isSignUpLoading) return <div>Criando novo usuário...</div>;
  if (isSignUpSuccess) {
    navigate('/home');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <div className="mb-4">
          <label className={labelClass}>Name</label>
          <input {...register('name')} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

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
          {isSubmitting ? 'Creating...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
