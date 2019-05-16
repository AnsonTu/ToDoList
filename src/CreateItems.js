import React from "react";
import serializeForm from "form-serialize";
import { observer } from "mobx-react";

class CreateItems extends React.Component {
  handleSubmit = event => {
    const { store } = this.props;
    event.preventDefault();
    const itemValues = serializeForm(event.target, { hash: true });
    itemValues.id = store.idCounter;
    itemValues.completed = false;
    if (store.createNewListItem && itemValues.message) {
      store.createNewListItem(itemValues);
    }
    document.getElementById("msg").value = "";
  };
  render() {
    const { store } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-item-form">
          <input type="text" name="message" placeholder="What to do?" id="msg" />
          <button onClick={() => store.increaseCounter()}>Add New Item</button>
        </form>
      </div>
    );
  }
}

export default observer(CreateItems);