import React from "react";
import NewMerch from "./NewMerch";
import MerchList from "./MerchList";
import EditMerch from "./EditMerch";
import MerchDetail from "./MerchDetail";
import Cart from "./Cart";
import OutOfStock from "./OutOfStock";

//Add items from merchList to cart
//On item add: -1 to quantity in merch list and plus 1 to quantity in Cart
//Can click items in cart for details

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      mainMerchList: [],
      cart: [],
      selectedMerchId: null,
      selectedMerch: null,
    };
  }

  handleNewResetClick = () => {
    if (this.state.step < 2) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
        selectedMerch: null,
      }));
    } else {
      this.setState({
        step: 1,
        selectedMerch: null,
      });
    }
  };

  handleAddToCart = (id) => {
    let newCart = [...this.state.cart];
    let newMainMerchList = [...this.state.mainMerchList];
    const selectedMerch = this.state.mainMerchList.filter((m) => m.id === id);
    const merchListIndex = newMainMerchList.findIndex(
      (m) => m.id === selectedMerch[0].id
    );
    if (selectedMerch[0].quantity === 0) {
      this.setState({ step: 4, selectedMerch: null });
    } else {
      if (newCart.filter((m) => m.id === selectedMerch[0].id).length > 0) {
        const cartIndex = newCart.findIndex(
          (m) => m.id === selectedMerch[0].id
        );
        newCart[cartIndex].cartQuantity += 1;
        newMainMerchList[merchListIndex].quantity -= 1;
      } else {
        newCart = newCart.concat(selectedMerch);
        newCart[newCart.length - 1].cartQuantity = 1;
        newMainMerchList[merchListIndex].quantity -= 1;
      }
      this.setState({ cart: newCart, mainMerchList: newMainMerchList });
    }
  };

  handleSelectingMerch = (id) => {
    const selectedMerch = this.state.mainMerchList.filter(
      (m) => m.id === id
    )[0];
    this.setState({ step: 1, selectedMerch: selectedMerch });
  };

  handleEditClick = (id) => {
    this.setState({
      selectedMerchId: id,
      step: 3,
      selectedMerch: null,
    });
  };

  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      step: 1,
      selectedMerch: null,
    });
  };

  handleDeletingMerchFromList = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(
      (m) => m.id !== id
    );
    this.setState({
      mainMerchList: newMainMerchList,
      step: 1,
      selectedMerch: null,
    });
  };

  handleEditingMerch = (merch) => {
    const newMainMerchList = [...this.state.mainMerchList];
    const index = newMainMerchList.findIndex((m) => m.id === merch.id);
    newMainMerchList[index] = merch;
    this.setState({
      mainMerchList: newMainMerchList,
      step: 1,
      selectedMerch: null,
    });
  };

  render() {
    let currentDisplay = null;
    if (this.state.selectedMerch != null) {
      currentDisplay = (
        <>
          <MerchDetail
            merch={this.state.selectedMerch}
            onDeletingMerch={this.handleDeletingMerchFromList}
            onEditClick={this.handleEditClick}
            onAddToCart={this.handleAddToCart}
          />
          <button onClick={this.handleNewResetClick}>Go Back</button>
          <Cart
            cart={this.state.cart}
            onSelectingMerch={this.handleSelectingMerch}
          />
        </>
      );
    } else if (this.state.step === 1) {
      currentDisplay = (
        <>
          <MerchList
            merchList={this.state.mainMerchList}
            onSelectingMerch={this.handleSelectingMerch}
          />
          <button onClick={this.handleNewResetClick}>Add merch</button>
          <Cart
            cart={this.state.cart}
            onSelectingMerch={this.handleSelectingMerch}
          />
        </>
      );
    } else if (this.state.step === 2) {
      currentDisplay = (
        <>
          <NewMerch onNewMerchCreation={this.handleAddingNewMerchToList} />
          <button onClick={this.handleNewResetClick}>Go Back</button>
          <Cart
            cart={this.state.cart}
            onSelectingMerch={this.handleSelectingMerch}
          />
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
          <Cart
            cart={this.state.cart}
            onSelectingMerch={this.handleSelectingMerch}
          />
        </>
      );
    } else if (this.state.step === 4) {
      currentDisplay = (
        <>
          <OutOfStock />
          <button onClick={this.handleNewResetClick}>Go Back</button>
          <Cart
            cart={this.state.cart}
            onSelectingMerch={this.handleSelectingMerch}
          />
        </>
      );
    }
    return currentDisplay;
  }
}

export default MerchControl;
