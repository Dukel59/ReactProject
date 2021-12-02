import React from "react";

const Users = () => {
  const users = [
    {
      name: "Николай",
      email: "kolyan228@gmail.com",
      phone: 8029954802,
    },
    {
      name: "Григорий",
      email: "lepsthebest@gmail.com",
      phone: 80230233232,
    },
    {
      name: "Максим",
      email: "galkinandpugacheva@gmail.com",
      phone: 80032023023,
    },
  ];
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
