import { Component } from "react";

class MenuItem extends Component {
    handleClick = (event) => {
        this.props.selectList(event.target.dataset.value);
        this.props.toogleMenu();
    }
    render() {
        console.log(this.props.currentList +" "+ this.props.name)
        return (
            <li onClick={this.handleClick} 
                data-value={this.props.name}
                className={this.props.currentList === this.props.name ? 'active' : ''}>
                    {this.props.name}
            </li>
        );
    }
}

export default MenuItem;