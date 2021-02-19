import React from "react";

export const Input = (props) => {

  return <>
      <input
          type="text"
          placeholder="Search..."
          style={{ marginBottom: 20, padding: 10 }}
          onChange={props.handleChange}
          defaultValue={props.search}
        />
          </>;
};
