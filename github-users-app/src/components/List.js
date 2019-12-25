import React from "react";

function List({ title, list }) {
  return (
    <ul>
      <h3>{title}</h3>
      {list.map(item => (
        <li key={item._id}>
          {item ? `${item.name.first} ${item.name.last}` : ""}
        </li>
      ))}
    </ul>
  );
}
export default List;