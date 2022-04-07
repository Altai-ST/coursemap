import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserList() {
  const data = useSelector((state) => state.users.userList);
  console.log(data);
  return (
    <div>
      <button>
        <Link to="/">Click</Link>
      </button>
      {data.map((el) => {
        return (
          <>
            <p>Имя:</p>
            <div>{el.name}</div>
            <div>{el.email}</div>
          </>
        );
      })}
    </div>
  );
}
