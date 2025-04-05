import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams;

  const userdate = {
    1: { name: "Ajay", age: 22 },
    2: { name: "Bala", age: 24 },
    3: { name: "Chandru", age: 21 },
  };
  const user = userdate[id];

  if (!user) {
    return <h1>users not found</h1>;
  }
  return (
    <div>
      <h2>Profile for User ID: {id}</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
export default User