import React from "react";

class ShowItems extends React.Component {
  render() {
    return (
      <div>
        <ul className="to-do-list">
          {this.props.listOfItems.map(item => (
            <li key={item.id} className="list-item">
              <div className="list-item-details">
                <input type="checkbox" />
                {item.name}
                <button onClick={() => this.props.onDeleteItem(item)} className="remove-item">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowItems;