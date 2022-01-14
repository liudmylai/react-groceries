/**
 *  Class Component
 */

import { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceries: [...props.groceries]
        };
    }
    // add new items to the grocery list
    addItem = (newItem) => {
        this.setState(prevState => ({
            groceries: [...prevState.groceries, newItem]
        }));
    }
    // conditionally render the grocery items based on whether or not they were purchased 
    isPurchased = (id) => {
        this.setState(prevState => ({
                groceries: prevState.groceries.map((grocery, index) => (index === id ? { ...grocery, isPurchased: !grocery.isPurchased } : grocery))
        }));
    }

    // remove item from the grocery list
    deleteItem = (id) => {
        this.setState(prevState => ({
            groceries: prevState.groceries.filter((grocery, index) => (index !== id))
        }));     
    }

    render() {
        return (
            <>
                <div className="container">
                    <Header />
                    <Form addItem={this.addItem} />
                    <Main groceries={this.state.groceries} isPurchased={this.isPurchased} deleteItem={this.deleteItem} />
                </div>
                <Footer />
            </>
        );
    }
}

export default Layout;

/**
 *  Functional Component
 */

// import { useState } from "react";
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import Form from "./Form";

// function Layout(props) {

//     const [groceries, setGroceries] = useState([...props.groceries]);

//     const addItem = (newItem) => {
//         setGroceries(prevGroceries => [...prevGroceries, newItem])
//     }

//     const isPurchased = id => {
//         setGroceries(prevGroceries => prevGroceries.map((grocery, index) => (index === id ? { ...grocery, isPurchased: !grocery.isPurchased } : grocery)))
//     }

//     const deleteItem = id => {
//         setGroceries(prevGroceries => prevGroceries.filter((grocery, index) => (index !== id)))
//     }

//     return (
//         <>
//             <div className="container">
//                 <Header />
//                 <Form addItem={addItem} />
//                 <Main groceries={groceries} isPurchased={isPurchased} deleteItem={deleteItem}/>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Layout;
