/**
 *  Class Component
 */
import { Component } from "react";

class Grocery extends Component {

    handleClick = event => {
        this.props.isPurchased(this.props.id);
    }

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
                <span className="close" onClick={this.handleDelete}>×</span>
            </div>
        );
    }

}
export default Grocery;


/**
 *  Functional Component
 */
// function Grocery(props) {
//     const { grocery, id, isPurchased, deleteItem } = props;


//     const handleClick = event => {
//         isPurchased(id)
//     }

//     const handleDelete = event => {
//         deleteItem(id)
//     }

//     return (
//         <div className="item">
//             <li style={{ textDecoration: grocery.isPurchased ? "line-through" : "none" }} onClick={handleClick}>
//                 {grocery.item} - {grocery.quantity} <small>{grocery.units}</small>
//             </li>
//             <span className="close" onClick={handleDelete}>×</span>
//         </div>
//     );
// }
// export default Grocery;