import React, { Component } from "react";

export default class Buy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      buyList: []
    };
  }
  handleChange = event => {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "price") {
      this.setState({ price: event.target.value });
    }
  };
  handleSubmission = event => {
    event.preventDefault();
    this.state.buyList.push({buyName:this.state.name,
    buyPrice:this.state.price})
    this.setState({buyList:this.state.buyList})
    this.props.updateBuy(this.state.buyList)
  };


  render() {
    // fields product title, product offer price
    return (
      <div>
        <form action="">
          <fieldset>
            <legend>Make an Offer</legend>
            <p>
              <label htmlFor="name">Product Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label htmlFor="price">Price: </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder ="Price"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </p>
            <button onClick={this.handleSubmission}>Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
