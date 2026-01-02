import { User } from 'src/models/User';

interface UsersTableProps {
  users: User[];
  onInfo: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

function UserTable({ users, onInfo, onEdit, onDelete }: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        {/* Header (hidden on mobile) */}
        <thead className="hidden md:table-header-group bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-4 py-3 text-end text-sm font-semibold text-gray-700">
              {''}
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
                  Name
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
                    onClick={() => onInfo(user)}
                    className="px-3 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    Info
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    className="px-3 py-1 text-xs font-medium rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className="px-3 py-1 text-xs font-medium rounded bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
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
