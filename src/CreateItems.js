import React from "react";

class CreateItems extends React.Component {
  render() {
    return (
      <div>
        <input className="create-new-to-do" />
        <button>Add New Item</button>
      </div>
    );
  }
}

export default CreateItems;