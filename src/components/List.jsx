import React from "react";

export const List = (props) => {

  const users = props.users.filter((u) =>
  u.toLowerCase().includes(props.search.toLowerCase()) 
  );
  if(props.search !== users){
      console.log('None')
  } else{
      console.log("yes")
  }

//   console.log(props.users)

  return (
    <ul className="list-group">
      {users.map((u, idx) => (
          <li className="list-group-item" key={idx}>{u}</li>
          
      ))}
    </ul>
  );
};
