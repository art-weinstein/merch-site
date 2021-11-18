import React from "react";
import NewMerch from "./NewMerch";
import MerchList from "./MerchList";
import EditMerch from "./EditMerch";

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      mainMerchList: [],
      selectedMerchId: null,
    };
  }

  handleNewResetClick = () => {
    if (this.state.step < 2) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    } else {
      this.setState({
        step: 1,
      });
    }
  };

  handleEditClick = (id) => {
    this.setState({
      selectedMerchId: id,
      step: 3,
    });
  };

  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({ mainMerchList: newMainMerchList, step: 1 });
  };

  handleDeletingMerchFromList = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(
      (m) => m.id !== id
    );
    this.setState({ mainMerchList: newMainMerchList });
  };

  handleEditingMerch = (merch) => {
    const newMainMerchList = [...this.state.mainMerchList];
    const index = newMainMerchList.findIndex((m) => m.id === merch.id);
    newMainMerchList[index] = merch;
    this.setState({ mainMerchList: newMainMerchList, step: 1 });
  };

  render() {
    let currentDisplay = null;
    if (this.state.step === 1) {
      currentDisplay = (
        <>
          <MerchList
            merchList={this.state.mainMerchList}
            onDeletingMerch={this.handleDeletingMerchFromList}
            onEditClick={this.handleEditClick}
          />
          <button onClick={this.handleNewResetClick}>Add merch</button>
        </>
      );
    } else if (this.state.step === 2) {
      currentDisplay = (
        <>
          <NewMerch onNewMerchCreation={this.handleAddingNewMerchToList} />
          <button onClick={this.handleNewResetClick}>Go Back</button>
        </>
      );
    } else if (this.state.step === 3) {
      currentDisplay = (
        <>
          <EditMerch
            onEditingMerch={this.handleEditingMerch}
            merch={this.state.mainMerchList.find(
              (m) => m.id === this.state.selectedMerchId
            )}
          />
          <button onClick={this.handleNewResetClick}>Go Back</button>
        </>
      );
    }
    return currentDisplay;
  }
}

export default MerchControl;
