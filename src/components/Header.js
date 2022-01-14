/**
 *  Class Component
 */
import { Component } from "react";
import ListSelector from "./ListSelector";
import ListForm from "./ListForm";

class Header extends Component {
    render() {
        return (
            <div className="heading">
                <h1>Grocery List</h1>
                <ListForm
                    lists={this.props.lists}
                    addList={this.props.addList}
                />
                <ListSelector
                    currentList={this.props.currentList}
                    lists={this.props.lists}
                    selectList={this.props.selectList}
                />
            </div>
        );
    }
}
export default Header;


/**
 *  Functional Component
 */
// function Header() {
//     return (
//         <div className="heading">
//             <h1>Grocery List</h1>
//         </div>
//     );
// }
// export default Header;