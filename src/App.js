import React from "react";
import "./App.css";
import CreateItems from "./CreateItems";
import ShowItems from "./ShowItems";
import Store from "./Store";
import { decorate, observable, action } from "mobx";

decorate(Store, {
  listOfItems: observable,
  idCounter: observable,
  increaseCounter: action,
  changeCompletionState: action,
  removeListItem: action,
  createNewListItem: action
});

const store = new Store();
class App extends React.Component {
  render() {
    return (
      <div className="App">
        To-Do List
        <CreateItems store={store} />
        <ShowItems store={store} />
      </div>
    );
  }
}

export default App;