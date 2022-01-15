import { Component } from "react";
import MenuItem from "./MenuItem";

class MenuList extends Component {
    render() {
        return (
            <ul>
                    {this.props.lists.map((list, index) => 
                        <MenuItem 
                            name={list.name} 
                            key={index} 
                            currentList={this.props.currentList}
                            selectList={this.props.selectList}
                            toogleMenu={this.props.toogleMenu}
                        />
                    )}
            </ul>
        );
    }

}
export default MenuList;