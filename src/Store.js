import React from "react";

class Store extends React.Component {
  listOfItems = [];
  idCounter = 0;
  changeCompletionState = id => {
    const newStatus = [...this.listOfItems];
    let index = newStatus.findIndex(item => item.id === id);
    newStatus[index].completed = !newStatus[index].completed;
    this.listOfItems = newStatus;
  };
  increaseCounter = () => {
    this.idCounter += 1;
  };
  createNewListItem = item => {
    this.listOfItems = this.listOfItems.concat(item);
  };
  removeListItem = item => {
    this.listOfItems = this.listOfItems.filter(i => i.id !== item.id);
  };
}

export default Store;