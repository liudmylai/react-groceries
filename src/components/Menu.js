import { Component } from "react";
import ListForm from "./ListForm";
import MenuList from "./MenuList";

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isToggle: false
        }
    }

    toogleMenu = (event) => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render() {
        return (
            <>
                <button className="toggler"
                    onClick={this.toogleMenu}
                    type="button">
                    <span className="toggler-icon">
                        <i className={this.state.isToggle ? "fas fa-times" : "fas fa-bars"}></i>
                    </span>
                </button>
                <div className="toggler-collapse"
                    style={{ display: this.state.isToggle ? "flex" : "none" }}
                >
                    <ListForm
                        lists={this.props.lists}
                        addList={this.props.addList}
                        toogleMenu={this.toogleMenu}
                    />
                    <MenuList
                        currentList={this.props.currentList}
                        lists={this.props.lists}
                        selectList={this.props.selectList}
                        toogleMenu={this.toogleMenu}
                    />
                </div>
            </>
        );
    }
}

export default Menu;