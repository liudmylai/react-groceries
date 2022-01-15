import { Component } from "react";

class ListForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            isExists: false
        }
    }

    // update the value and set it as the current value of 'grocery' 
    handleChange = (event) => {
        let { id, value } = event.target;
        const checkIfExists = this.props.lists
            .filter(list => list.name === value).length > 0;
        this.setState(prevState => ({
            ...prevState,
            isExists: checkIfExists,
            [id]: value
        }));
    }

    // add a new grocery list when user clicks on 'New List' button
    handleClick = (event) => {
        if (this.state.name !== '' && !this.state.isExists) {
            this.props.addList(this.state.name);
            this.props.toogleMenu();
            this.setState({
                name: '',
                isExists: false
            });
        }
    }

    render() {
        return (
            <>
                <div className="has-validation">
                    <input
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text"
                    />
                    <div className="error" style={{ display: (this.state.isExists ? 'block' : 'none') }}>This name is already used</div>
                </div>
                <div className="button" onClick={this.handleClick}>
                    <span>New List</span>
                </div>
            </>
        );
    }
}

export default ListForm;