import React from "react";
import serializeForm from "form-serialize";

class CreateItems extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const itemValues = serializeForm(event.target, { hash: true });
    itemValues.id = this.props.idCounter;
    itemValues.completed = false;
    if (this.props.onCreateItem && itemValues.message) {
      this.props.onCreateItem(itemValues);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-item-form">
          <input type="text" name="message" />
          <button onClick={() => this.props.onCounterIncrease()}>
            Add New Item
          </button>
        </form>
      </div>
    );
  }
}

export default CreateItems;