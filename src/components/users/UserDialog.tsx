import { useState } from 'react';
import { Dialog } from '../shared/Dialog';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema, UserFormData } from 'src/validators/users/userSchema';
import { User, UserActions } from 'src/models/User';

interface UserDialogProps {
  title: string;
  action: UserActions;
  userData?: Partial<User> | null;
  onConfirm?: (data: Partial<User>) => void;
  onClose: (closeAction: boolean) => void;
}

function UserDialog({
  title,
  userData,
  action = 'CREATE',
  onClose,
  onConfirm,
}: UserDialogProps) {
  const saveBtnTitle =
    action === 'CREATE' ? 'Criar usuário' : 'Salvar alterações';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(userSchema),
  });

  function confirmAction(data: Partial<User>) {
    if (userData?.id) {
      const userUpdated: Partial<User> = {
        id: userData.id,
        name: data.name ? data.name : userData.name,
        email: data.email ? data.email : userData.email,
      };
      onConfirm?.(userUpdated);
    } else {
      onConfirm?.(data);
    }
    onClose(true);
  }

  function userDialogTitle() {
    if (action === 'CREATE') {
      return 'Criar usuário';
    }
    if (action === 'UPDATE') {
      return 'Editar usuário';
    }
    if (action === 'GET') {
      return 'Informações do usuário';
    } else {
      return '';
    }
  }

  return (
    <Dialog title={userDialogTitle()} onClose={() => onClose(false)}>
      <form
        onSubmit={handleSubmit(confirmAction)}
        className="space-y-4"
        noValidate
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            disabled={action === 'GET'}
            value={userData?.name}
            type="text"
            {...register('name')}
            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2
            ${
              errors.name
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            disabled={action === 'GET'}
            value={userData?.email}
            type="email"
            {...register('email')}
            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2
            ${
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Actions */}
        {action !== 'GET' && (
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              //   disabled={submitting}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {saveBtnTitle}
            </button>
          </div>
        )}
      </form>
    </Dialog>
  );
}

export default UserDialog;
