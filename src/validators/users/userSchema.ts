import * as yup from 'yup';

export const userSchema = yup.object({
  name: yup
    .string()
    .required('Campo obrigatório')
    .min(2, 'Campo "Nome" precisa possuir no mínimo 2 caracteres')
    .max(50, 'Campo "Nome" não pode possuir mais que 50 caracteres'),

  email: yup
    .string()
    .required('Campo obrigatório')
    .email('Email inválido')
    .min(5, 'Campo "Email" precisa possuir no mínimo 2 caracteres')
    .max(50, 'Campo "Email" não pode possuir mais que 50 caracteres'),
});

export type UserFormData = yup.InferType<typeof userSchema>;
