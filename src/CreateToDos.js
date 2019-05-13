import React from "react";

class CreateToDos extends React.Component {
    render() {
        return (
            <div>
                <input className="create-new-to-do">
                </input>
                <button onClick={()=>this.props.createNewListItem}>Add New Item</button>
            </div>
        )
    }
}

export default CreateToDos;