import React from "react";

class ListToDos extends React.Component {
  render() {
    return (
      <div>
        <ul className="to-do-list">
          {this.listOfToDos.map(item => (
            <li key={item.id}></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListToDos;