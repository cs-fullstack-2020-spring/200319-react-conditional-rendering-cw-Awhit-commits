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
  //Grab the values from input if there are such values in the field
  handleChange = event => {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "price") {
      this.setState({ price: event.target.value });
    }
  };

    //For clicking the submit button, it'll clear out the values while pusing them into a list
  handleSubmission = event => {
    event.preventDefault();
    this.state.buyList.push({buyName:this.state.name,
    buyPrice:this.state.price})
    this.setState({buyList:this.state.buyList})
    this.props.updateBuy(this.state.buyList)
    this.setState({name: "",price:""})
  };


  render() {
    //Setting up a simple form with event listners included
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
