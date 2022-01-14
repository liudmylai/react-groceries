import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";

function Layout(props) {

    const [groceries, setGroceries] = useState([...props.groceries]);

    const addItem = (newItem) => {
        setGroceries(prevGroceries => [...prevGroceries, newItem])
    }

    const isPurchased = id => {
        setGroceries(prevGroceries => prevGroceries.map((grocery, index) => (index === id ? { ...grocery, isPurchased: !grocery.isPurchased } : grocery)))
    }
    
    const deleteItem = id => {
        setGroceries(prevGroceries => prevGroceries.filter((grocery, index) => (index !== id)))
    }

    return (
        <>
            <div className="container">
                <Header />
                <Form addItem={addItem} />
                <Main groceries={groceries} isPurchased={isPurchased} deleteItem={deleteItem}/>
            </div>
            <Footer />
        </>
    );
}
export default Layout;