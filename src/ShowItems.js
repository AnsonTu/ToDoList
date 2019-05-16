import React from "react";
import { observer } from "mobx-react";

class ShowItems extends React.Component {
  render() {
    const { store } = this.props;
    let finishedItems = store.listOfItems.filter(
      items => items.completed === true
    );
    let unfinishedItems = store.listOfItems.filter(
      items => items.completed === false
    );
    return (
      <div>
        <ul className="unfinished-items-list">
          Unfinished Items
          {unfinishedItems.map(item => (
            <li key={item.id} className="list-item">
              <div className="list-item-details">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onClick={() => store.changeCompletionState(item.id)}
                />
                {item.message}
                <button
                  onClick={() => store.removeListItem(item)}
                  className="remove-item"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <ul className="finished-items-list">
          Finished Items
          {finishedItems.map(item => (
            <li key={item.id} className="list-item">
              <div className="list-item-details">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onClick={() => store.changeCompletionState(item.id)}
                />
                {item.message}
                <button
                  onClick={() => store.removeListItem(item)}
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

export default observer(ShowItems);