import { Info, Pencil, Plus, Trash2 } from 'lucide-react';
import { User } from 'src/models/User';

interface UsersTableProps {
  users: User[];
  onInfo: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onCreate: () => void;
}

function UserTable({
  users,
  onInfo,
  onEdit,
  onDelete,
  onCreate,
}: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        {/* Header (hidden on mobile) */}
        <thead className="hidden md:table-header-group bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Nome
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-4 py-3 text-end text-sm font-semibold text-gray-700">
              <button
                title="Criar usuário"
                className="px-3 py-1 text-xs font-medium rounded bg-green-100 text-green-700 hover:bg-green-200"
                onClick={() => onCreate()}
              >
                <Plus className="w-5 h-5 text-green-500" />
              </button>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr
              key={user.id}
              className="block md:table-row p-4 md:p-0 hover:bg-gray-50"
            >
              {/* Name */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Nome
                </span>
                <div className="text-sm text-gray-900">{user.name}</div>
              </td>

              {/* Email */}
              <td className="block md:table-cell px-4 py-2">
                <span className="md:hidden text-xs font-semibold text-gray-500">
                  Email
                </span>
                <div className="text-sm text-gray-700 break-all">
                  {user.email}
                </div>
              </td>

              {/* Actions */}
              <td className="block md:table-cell px-4 py-3">
                <div className="flex gap-2 md:justify-end">
                  <button
                    title="Informações do usuário"
                    onClick={() => onInfo(user)}
                    className="px-3 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    <Info className="w-5 h-5 text-blue-500" />
                  </button>
                  <button
                    title="Editar usuário"
                    onClick={() => onEdit(user)}
                    className="px-3 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  >
                    <Pencil className="w-5 h-5 text-yellow-500" />
                  </button>
                  <button
                    title="Deletar usuário"
                    onClick={() => onDelete(user)}
                    className="px-3 py-1 text-xs font-medium rounded bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
