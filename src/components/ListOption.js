import { Component } from "react";

class ListOption extends Component {
    render() {
        return (
            <option value={this.props.name}>{this.props.name}</option>
        );
    }
}

export default ListOption;