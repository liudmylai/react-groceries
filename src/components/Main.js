import { Component } from "react";
import Grocery from "./Grocery";

class Main extends Component {
    render() {
        const { groceries, isPurchased, deleteItem } = this.props;
        return (
            <div>
                <ul>
                    {groceries
                        .sort((a, b) => a.item > b.item ? 1 : -1)
                        .map((grocery, index) => 
                        <Grocery grocery={grocery} key={index} id={index} isPurchased={isPurchased} deleteItem={deleteItem}/>
                    )}
                </ul>
            </div>
        );  
    }
}

export default Main; 