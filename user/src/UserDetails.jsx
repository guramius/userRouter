import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div>
      <h1>მომხმარებლების შესახებააა</h1>
      <p>მომხარებელი: {user.id}</p>
      <p>სახელიი: {user.name}</p>
    </div>
  );
};

export default UserDetails;
