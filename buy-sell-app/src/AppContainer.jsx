import React, { Component } from "react";
import Sell from "./Sell";
import Buy from "./Buy";
import ListofItems from "./ListofItems";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellsPage: false,
      buyPage: false,
      buyerList: [],
      sellerList: []
    };
  }
  updateBuyPage = () => {
    this.setState({ buyPage: true });
    this.setState({ sellsPage: false });
  };
  updateSellsPage = () => {
    this.setState({ sellsPage: true });
    this.setState({ buyPage: false });
  };
  updateBuyList = buyerList => {
    this.setState({ buyerList: buyerList });
  };
  updateSellList = (sellerList)=>{
      this.setState({sellerList:sellerList})
  }
  render() {
    let userForm;
    if (this.state.sellsPage) {
      userForm = <Sell updateSell = {this.updateSellList} />;
    } else if (this.state.buyPage) {
      userForm = <Buy updateBuy={this.updateBuyList} />;
    }
    return (
      <div className="container">
        <h1>Buy-Sell App</h1>
        <ListofItems buyList={this.state.buyerList} sellList ={this.state.sellerList} />
        <div className="button">
          <button onClick={this.updateBuyPage}>Buy!</button>
          <button onClick={this.updateSellsPage}>Sell!</button>
        </div>
        {userForm}
      </div>
    );
  }
}
