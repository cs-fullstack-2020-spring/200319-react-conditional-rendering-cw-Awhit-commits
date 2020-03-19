import React, { Component } from 'react'

export default class ListofItems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="itemsList">
                <h1>List of Items</h1>
                <h2>Items Buying</h2>
                {
                this.props.buyList.map(item =>{
                    return (<div>
                        <p>{item.buyName}</p>
                        <p>{item.buyPrice}</p>
                    </div>)

                })}
                <h2>Items Selling</h2>
                {
                    this.props.sellList.map(item =>{
                        return(<div>
                        <p>{item.sellName}</p>
                        <p>${item.sellPrice}</p>
                        <p>{item.sellCondition}</p>
                        </div>)
                    })
                }
            </div>
        )
    }
}
