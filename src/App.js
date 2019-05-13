import React from "react";
import "./App.css";
import { observer, observable } from "mobx-react";
import CreateToDos from "./CreateToDos";
import ListToDos from "./ListToDos";
import { decorate } from "mobx";

class App extends React.Component {
  state = {
    listOfToDos: [{ name: "A", id: 1 }, { name: "B", id: 2 }]
  };
  createNewListItem(item) {
    this.setState({
      listOfToDos: this.state.listOfToDos + item
    });
  }
  render() {
    //const store = this.props.store;
    return (
      <div className="App">
        ToDo-List
        <CreateToDos
          newListItem={item => {
            this.createNewListItem(item);
          }}
        />
        <ListToDos listOfToDos={this.props.ListToDos} />
      </div>
    );
  }
}

decorate(App, {
  App: observer,
  CreateToDos: observer,
  ListToDos: observer
});

export default App;
