/**
 *  Class Component
 */

import { Component } from "react";
class Footer extends Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <footer>
                <p>Copyright © {year}</p>
            </footer>
        );
    }
}

export default Footer;

/**
 *  Functional Component
 */

// function Footer() {
//     const year = new Date().getFullYear();
//     return (
//         <footer>
//             <p>Copyright © {year}</p>
//         </footer>
//     );
// }
// export default Footer;