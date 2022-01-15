/**
 *  Class Component
 */
import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="heading">
                <h1>Grocery List</h1>
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