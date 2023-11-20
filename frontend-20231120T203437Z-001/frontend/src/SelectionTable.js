import React from 'react';

function SelectionTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.tag}</td>
            <td>
              <img src={item.image} alt={item.tag} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SelectionTable;
