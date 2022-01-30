import { Component } from "react";

class Grocery extends Component {
    
    // cross out the item when user clicks on it
    handleClick = event => {
        this.props.isPurchased(this.props.id);
    }

    // delete an item from the grocery list when user clicks 'close' button
    handleDelete = event => {
        this.props.deleteItem(this.props.id);
    }
  
    render() {
        const { grocery } = this.props;
        return (
            <div className="item">
                <li style={{ textDecoration: grocery.isPurchased ? "line-through" : "none" }} onClick={this.handleClick}>
                    {grocery.item} - {grocery.quantity} <small>{grocery.units}</small>
                </li>
                <span className="close" onClick={this.handleDelete}>
                    <i className="fas fa-times"></i>
                </span>
            </div>
        );
    }
}

export default Grocery;