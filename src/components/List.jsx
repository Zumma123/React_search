import React from "react";

export const List = (props) => {

  const users = props.users.filter((u) =>
  u.toLowerCase().includes(props.search.toLowerCase()) 
  );
  return (
    <ul className="list-group">
      {users.map((u, idx) => (
          <li className="list-group-item" key={idx}>{u}</li>
          
      ))}
    </ul>
  );
};
