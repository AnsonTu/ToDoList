import React from "react";
import "./App.css";
import CreateItems from "./CreateItems";
import ShowItems from "./ShowItems";
/*import { observer } from "mobx-react";
import { decorate, action, observable } from "mobx";*/

class App extends React.Component {
  state = {
    listOfItems: [],
    idCounter: 0
  };
  changeCompletionState = (index) => {
    const newStatus = [...this.state.listOfItems];
    newStatus[index].completed = !newStatus[index].completed;
    this.setState(state => ({
      listOfItems: newStatus
    }));
  };
  increaseCounter = () => {
    this.setState(state => ({
      idCounter: state.idCounter + 1
    }));
  };
  createNewListItem = item => {
    this.setState(state => ({
      listOfItems: state.listOfItems.concat(item)
    }));
  };
  removeListItem = item => {
    this.setState(state => ({
      listOfItems: state.listOfItems.filter(i => i.id !== item.id)
    }));
  };
  render() {
    return (
      <div className="App">
        To-Do List
        <CreateItems
          onCreateItem={item => {
            this.createNewListItem(item);
          }}
          onCounterIncrease={this.increaseCounter}
          idCounter={this.state.idCounter}
        />
        <ShowItems
          onChangeCheckbox={this.changeCompletionState}
          onDeleteItem={this.removeListItem}
          listOfItems={this.state.listOfItems}
        />
      </div>
    );
  }
}

/*decorate(App, {
  App: observer,
  CreateToDos: observer,
  ListToDos: observer
});*/

export default App;