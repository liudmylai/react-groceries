import { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";
import Menu from "./Menu";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: 'default',
            lists: [
                {
                    name: 'default',
                    groceries: [...props.groceries]
                }
            ]
        };
    }
    
    // add a new grocery list
    addList = (newList) => {
        this.setState(prevState => ({
            ...prevState,
            lists: [
                ...prevState.lists,
                {
                    name: newList,
                    groceries: []
                }
            ],
            currentList: newList
        }));
    }

    // set selected grocery list as default
    selectList = (list) => {
        this.setState(prevState => ({
            ...prevState,
            currentList: list
        }));
    }

    // add new items to the selected grocery list
    addItem = (newItem) => {
        this.setState(prevState => ({
            ...prevState,
            lists: prevState.lists.map(
                list => (list.name === prevState.currentList ? { ...list, groceries: [...list.groceries, newItem] } : list)
            )
        }));
    }

    // conditionally render grocery items based on whether or not they were purchased 
    isPurchased = (id) => {
        this.setState(prevState => ({
            ...prevState,
            lists: prevState.lists.map(
                list => (list.name === prevState.currentList ?
                    {
                        ...list,
                        groceries: list.groceries.map((grocery, index) => (index === id ? { ...grocery, isPurchased: !grocery.isPurchased } : grocery))

                    }
                    : list))
        }));
    }

    // remove item from the selected grocery list
    deleteItem = (id) => {
        this.setState(prevState => ({
            ...prevState,
            lists: prevState.lists.map(
                list => (list.name === prevState.currentList ?
                    {
                        ...list,
                        groceries: list.groceries.filter((grocery, index) => (index !== id))

                    }
                    : list))
        }));
    }

    render() {
        return (
            <>
                <div></div>
                <div className="container">
                    <Menu
                        currentList={this.state.currentList}
                        lists={this.state.lists}
                        addList={this.addList}
                        selectList={this.selectList}
                    />
                    <Header />
                    <Form
                        addItem={this.addItem}
                    />
                    <Main
                        groceries={this.state.lists.filter(list => list.name === this.state.currentList)[0].groceries}
                        isPurchased={this.isPurchased}
                        deleteItem={this.deleteItem}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default Layout;