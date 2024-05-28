import React, { useState } from "react";

// Dummy data for initial user list
const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    balance: 1000,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    balance: 2500,
    status: "pending",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    balance: 3000,
    status: "blocked",
  },
  // Add more users as needed
];

const AdminHome = () => {
  const [users, setUsers] = useState(dummyUsers);

  const handleStatusChange = (userId, newStatus) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    // Add logic to update the user status in the backend here
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Admin Home</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Balance
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {user.id}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {user.email}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                ${user.balance}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {user.status}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <select
                  value={user.status}
                  onChange={(e) => handleStatusChange(user.id, e.target.value)}
                  style={{ padding: "5px" }}
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="blocked">Blocked</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
