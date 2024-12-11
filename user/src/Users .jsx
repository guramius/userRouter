import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

const Users  = () => {
  const navigate = useNavigate();

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <h1>Wtf broo?!</h1>
        {users.map((user) => (
          <p
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            style={{ cursor: "pointer", color: "blue", font:"20px" }}
          >
            {user.name}
          </p>
        ))}
    </div>
  );
};

export default Users ;
