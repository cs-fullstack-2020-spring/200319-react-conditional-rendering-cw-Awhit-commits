import React, { Component } from "react";

export default class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      condition: "",
      sellList: []
    };
  }
  handleChange = event => {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "price") {
      this.setState({ price: event.target.value });
    } else if (event.target.name === "condition") {
      this.setState({ condition: event.target.value });
    }
  }
  
  handleSubmission=(event) =>{
      event.preventDefault();
      this.state.sellList.push({sellName:this.state.name,sellPrice:this.state.price,sellCondition:this.state.condition})
      this.setState({sellList:this.state.sellList})
      this.setState({name:"",price:"",condition:""})
      this.props.updateSell(this.state.sellList)
  }
  render() {
    // fields product title, product price, and product condition
    return (
      <div>
        <form action="">
          <fieldset>
            <legend>Sell A Item</legend>
            <div>
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
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <select
                  name="condition"
                  id="condition"
                  value={this.state.condition}
                  onChange={this.handleChange}
                >
                  <option value="">Please Select an Condition</option>
                  <option value="New">New</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </p>
              <button onClick = {this.handleSubmission}>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
