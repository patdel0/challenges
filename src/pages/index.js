import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      const formattedUsers = data.data.users.map((user) => ({
        id: user.id,
        name: user.attributes.name,
        age: user.attributes.age,
        email: user.attributes.contact.email,
        role: user.attributes.role,
        score: user.attributes.score,
      }));
      setUsers(formattedUsers);
    };

    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", width: 110 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => (
        <a href={`mailto:${params.value}`}>{params.value}</a>
      ),
    },
    { field: "role", headerName: "Role", width: 110 },
    { field: "score", headerName: "Score", width: 110 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1>User Data</h1>
      <DataGrid rows={users} columns={columns} pageSize={5} />
    </div>
  );
};

export default Home;
