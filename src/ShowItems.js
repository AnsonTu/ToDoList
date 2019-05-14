import React from "react";

class ShowItems extends React.Component {
  render() {
    let finishedItems = this.props.listOfItems.filter(items => items.completed === true);
    let unfinishedItems = this.props.listOfItems.filter(items => items.completed === false);
    return (
      <div>
        <ul className="unfinished-items-list">Unfinished Items
          {unfinishedItems.map(item => (
            <li key={item.id} className="list-item">
              <div className="list-item-details">
                <input type="checkbox" checked={item.completed} onClick={() => this.props.onChangeCheckbox(item.id)}/>
                {item.message}
                <button
                  onClick={() => this.props.onDeleteItem(item)}
                  className="remove-item"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <ul className="finished-items-list">Finished Items
          {finishedItems.map(item => (
            <li key={item.id} className="list-item">
              <div className="list-item-details">
                <input type="checkbox" checked={item.completed} onClick={() => this.props.onChangeCheckbox(item.id)}/>
                {item.message}
                <button
                  onClick={() => this.props.onDeleteItem(item)}
                  className="remove-item"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowItems;