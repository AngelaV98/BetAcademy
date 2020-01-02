import React from "react";

import "./Table.css";

function Table({ list = [], fields }) {
  return (
    <div className="Table-container">
      <table className="Table">
        <thead className="Table-head">
          <tr>
            {fields.map((item, i) => {
              if (item.title === "Id") {
                return <td key={i} />;
              }
              return (
                <th key={i}>
                  <span>{item.title}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="Table-body">
          {list.map((row, i) => {
            const id = row.id;
            return (
              <tr key={id}>
                {fields.map((item, i) => {
                  if (item.value === "id") {
                    return <td key={i} />;
                  }
                  return (
                    <td key={i}>
                      <span>{row[item.value]}</span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
