import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Input } from "./components/Input";
import { List } from "./components/List";
import "./App.css";

const App = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    window.location.hash = value;
  };

  useEffect(() => {
    console.log(1);
    setSearch(decodeURI(window.location.hash.slice(1).toLowerCase()));
  }, [search]);
  return (
    <section className="app_search">
      <header>
      <h1>React App Collaboration Exercise Basic Search</h1>

      </header>
      <div className='App'>
        <Input search={search} handleChange={handleChange} />
        <List search={search} users={props.users} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
export default connect(mapStateToProps)(App);
