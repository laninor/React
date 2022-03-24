import React from "react";

function toDoItem(props) {
  return (
    <li>
      {props.text} {props.key}
    </li>
  );
}

export default toDoItem;
