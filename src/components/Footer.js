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