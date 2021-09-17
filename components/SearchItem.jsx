/* eslint-disable */
import React from "react";
import "./SearchItem.css";

const SearchItem = ({
  id,
  value,
  type = "text",
  isFocused,
  onInputChange,
  children,
}) => {
  return (
    <div className="material-field">
      <input
        className="material-field-input"
        id={id}
        value={value}
        onChange={onInputChange}
        autoFocus={isFocused}
        autocomplete="off"
      />
      <label class="material-field-label">Search</label>
    </div>
  );
};

export default SearchItem;
