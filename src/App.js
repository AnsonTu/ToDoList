import React from "react";
import "./App.css";
import { observer } from "mobx-react";
import CreateItems from "./CreateItems";
import ShowItems from "./ShowItems";
import { decorate } from "mobx";

class App extends React.Component {
  state = {
    listOfItems: [{
      name:"Anson", id:1
    }]
  };
  createNewListItem(item) {
    this.setState(state => ({
      listOfItems: state.listOfItems.concat(item)
    }));
  }
  removeListItem = (item) => {
    this.setState((state) => ({
      listOfItems: state.listOfItems.filter((i) => i.id !==item.id)
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
        <ShowItems onDeleteItem={this.removeListItem} listOfItems={this.state.listOfItems} />
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
