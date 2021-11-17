import React from 'react';
import NewMerch from './NewMerch';
import MerchList from './MerchList';
import EditMerch from './EditMerch';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      mainMerchList: [],
      selectedMerchId: null,
    };
  }

  handleClick = () => {
    if (this.state.step < 2) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }))
    } else {
      this.setState({
        step: 1,
      })
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({ mainMerchList: newMainMerchList, step: 1 });
  }

  handleDeletingMerchFromList = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(m => m.id !== id);
    this.setState({ mainMerchList: newMainMerchList });
  }

  render(){
    let currentDisplay = null;
    if (this.state.step === 1){
      currentDisplay = (
        <>
          <MerchList
            merchList ={this.state.mainMerchList}
            onDeletingMerch={this.handleDeletingMerchFromList}
          />
          <button onClick = {this.handleClick}>Add merch</button>
        </>
      );
    } else if (this.state.step === 2) {
      currentDisplay = (
        <>
          <NewMerch
            onNewMerchCreation={this.handleAddingNewMerchToList}
          />
          <button onClick = {this.handleClick}>Go Back</button>
        </>
      )
    }
    return currentDisplay;
  }
}

export default MerchControl;