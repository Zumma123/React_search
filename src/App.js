import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { Input } from "./components/Input";
import { List } from "./components/List";
import { SetUserTC } from "./redux/users_reducer";

const Section = styled.section`
  border: 1px solid #cbb6b6;
  box-shadow: 1px 4px 16px 0px;
  border-radius: 40px;
  margin: 20px;
  padding: 20px;
`;

const Basic = ({ className }) => (
  <header>
    <h1 className={className}>React App Collaboration Exercise Basic Search</h1>
  </header>
);

const Title = styled(Basic)`
  color: hotpink;
`;

const App = (props) => {
  const [search, setSearch] = useState("");
  const { SetUserTC } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    window.location.hash = value;
  };

  useEffect(() => {
    SetUserTC();
    setSearch(decodeURI(window.location.hash.slice(1).toLowerCase()));
  }, []);
  return (
    <Section>
      <Title />
      <Input search={search} handleChange={handleChange} />
      <List search={search} dataUsers={props.dataUsers} />
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUsers: state.usersPage.dataUsers,
  };
};
export default connect(mapStateToProps, { SetUserTC })(App);
