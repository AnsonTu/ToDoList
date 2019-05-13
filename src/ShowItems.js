import React from "react";

class ShowItems extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="to-do-list">
          {this.props.listOfItems.map(item => (
            <li key={item.id} className="list-item">
              <div className="list-item-details">
                <input type="checkbox" />
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowItems;