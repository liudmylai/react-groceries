/**
 *  Class Component
 */
import { render } from "@testing-library/react";
import { Component } from "react";
import Grocery from "./Grocery";

class Main extends Component {
    render() {
        const { groceries, isPurchased, deleteItem } = this.props;
        return (
            <div>
                <ul>
                    {groceries.map((grocery, index) => 
                        <Grocery grocery={grocery} key={index} id={index} isPurchased={isPurchased} deleteItem={deleteItem}/>
                    )}
                </ul>
            </div>
        );  
    }
}
export default Main; 

/**
 *  Functional Component
 */
// import Grocery from "./Grocery";

// function Main(props) {
//     const { groceries, isPurchased, deleteItem } = props;
//     return (
//         <div>
//             <ul>
//                 {groceries.map((grocery, index) => 
//                     <Grocery grocery={grocery} key={index} id={index} isPurchased={isPurchased} deleteItem={deleteItem}/>
//                 )}
//             </ul>
//         </div>
//     );
// }
// export default Main; 