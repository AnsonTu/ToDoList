import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import CreateItems from "./CreateItems";
import ShowItems from "./ShowItems";
import { decorate } from "mobx";

class App extends React.Component {
  state = {
    listOfItems: []
  };
  createNewListItem(item) {
    this.setState(state => ({
      listOfItems: state.listOfItems.concat(item)
    }));
  }
  render() {
    return (
      <div className="App">
        To-Do List
        <CreateItems
          newListItem={item => {
            this.createNewListItem(item);
          }}
        />
        <ShowItems listOfItems={this.state.listOfItems} />
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
