import React from "react";
import styled from "@emotion/styled";

const ListGroup = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListGroupItem = styled.li`
  font-weight: 600;
  padding: 10px;
  margin-bottom: 15px;
  background: #5d99db;
  border-radius: 10px;
`;
export const List = ({dataUsers, search}) => {
  const users = dataUsers.filter((u) =>
    u.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <ListGroup>
        {users.map((name, idx) => (
          <ListGroupItem key={idx}>{name}</ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};
