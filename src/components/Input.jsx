import React from "react";
import { css } from "@emotion/css";

const size = "10px";

export const Input = ({search, handleChange}) => {
  return (
    <>
      <input
        className={css`
          padding: ${size};
          margin-bottom: ${size};
        `}
        type="text"
        placeholder="Search..."
        onChangeCapture={handleChange}
        defaultValue={search}
      />
    </>
  );
};
