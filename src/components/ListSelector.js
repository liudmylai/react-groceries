import { Component } from "react";
import ListOption from "./ListOption";

class ListSelector extends Component {
    handleChange = (event) => {
        this.props.selectList(event.target.value);
    }

    render() {
        return (
            <div>
                <select onChange={this.handleChange} value={this.props.currentList}>
                    {this.props.lists.map((list, index) => <ListOption name={list.name} key={index} />)}
                </select>
            </div>
        );
    }

}
export default ListSelector;