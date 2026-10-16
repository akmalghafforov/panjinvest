import { Shield, Plus, Search, Edit, Trash2, UserCheck, UserX } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminUsersPage() {
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@panjakent.tj",
      role: "Admin",
      status: "active",
      lastLogin: "2024-05-24",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@panjakent.tj",
      role: "Editor",
      status: "active",
      lastLogin: "2024-05-23",
      createdAt: "2024-02-10"
    },
    {
      id: 3,
      name: "David Park",
      email: "david.park@panjakent.tj",
      role: "Editor",
      status: "active",
      lastLogin: "2024-05-22",
      createdAt: "2024-02-15"
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.wilson@panjakent.tj",
      role: "Viewer",
      status: "active",
      lastLogin: "2024-05-20",
      createdAt: "2024-03-05"
    },
    {
      id: 5,
      name: "James Brown",
      email: "james.brown@panjakent.tj",
      role: "Editor",
      status: "inactive",
      lastLogin: "2024-04-15",
      createdAt: "2024-01-20"
    }
  ];

  const roles = [
    {
      name: "Admin",
      count: 2,
      permissions: ["Full access", "User management", "System settings"],
      color: "bg-red-50 text-red-700"
    },
    {
      name: "Editor",
      count: 8,
      permissions: ["Create & edit content", "Review applications", "Manage documents"],
      color: "bg-blue-50 text-blue-700"
    },
    {
      name: "Viewer",
      count: 12,
      permissions: ["View content", "Export reports", "Access statistics"],
      color: "bg-green-50 text-green-700"
    }
  ];

  const stats = [
    { label: "Total Users", value: "22", color: "bg-blue-50 text-blue-600" },
    { label: "Active Users", value: "18", color: "bg-green-50 text-green-600" },
    { label: "Inactive Users", value: "4", color: "bg-gray-50 text-gray-600" },
    { label: "Admin Roles", value: "2", color: "bg-red-50 text-red-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Users and Roles</h1>
              <p className="text-[#667085] mt-1">Manage user accounts and permissions</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Plus className="h-5 w-5" />
              Add User
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:p-5 lg:p-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                <p className="text-sm text-[#667085]">{stat.label}</p>
                <p className={`text-xl md:text-2xl lg:text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:p-5 lg:p-6 mb-8">
            {roles.map((role) => (
              <div key={role.name} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#1F2933]">{role.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${role.color}`}>
                    {role.count} users
                  </span>
                </div>
                <ul className="space-y-2">
                  {role.permissions.map((permission, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#667085]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0F8A5F]" />
                      {permission}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Manage Role
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Roles</option>
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-[#1F2933]">{user.name}</p>
                          <p className="text-sm text-[#667085]">{user.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user.role === "Admin"
                              ? "bg-red-50 text-red-700"
                              : user.role === "Editor"
                              ? "bg-blue-50 text-blue-700"
                              : "bg-green-50 text-green-700"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {user.status === "active" ? (
                            <>
                              <UserCheck className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-green-600">Active</span>
                            </>
                          ) : (
                            <>
                              <UserX className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">Inactive</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {user.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
