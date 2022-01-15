/**
 *  Class Component
 */

import { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
            units: '',
            quantity: 0,
            isPurchased: false
        }
    }

    // update the value and set it as the current value of 'grocery' 
    handleChange = (event) => {
        let { id, value } = event.target;

        if (id === 'quantity' && value < 0) {
            value = 0;
        } else if (id === 'item') {
            value = value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        } else if (id === 'units') {
            value = value.toLowerCase();
        }
        this.setState(prevState => ({ ...prevState, [id]: value }));
    }
    
    // add a new item to the list when user clicks on 'Add' button
    handleClick = (event) => {
        this.props.addItem(this.state);
        this.setState({
            item: '',
            units: '',
            quantity: 0,
            isPurchased: false
        });
    }

    render() {
        return (
            <div className="form">
                <div className="input flex">
                    <label htmlFor="item">Item</label>
                    <input
                        id="item"
                        onChange={this.handleChange}
                        value={this.state.item}
                        type="text"
                    />
                </div>
                <div className="input autosized">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        id="quantity"
                        onChange={this.handleChange}
                        value={this.state.quantity}
                        type="number"
                    />
                    <span>{this.state.quantity}</span>
                </div>
                <div className="input autosized">
                    <label htmlFor="units">Units</label>
                    <input
                        id="units"
                        onChange={this.handleChange}
                        value={this.state.units}
                        type="text"
                    />
                    <span>{this.state.units}</span>
                </div>
                <div className="button" onClick={this.handleClick}>
                    <span>Add</span>
                </div>
            </div>
        );
    }
}

export default Form;

/**
 *  Functional Component
 */

// import { useState } from "react";
// function Form(props) {
//     const [grocery, setGrocery] = useState({
//         item: '',
//         units: '',
//         quantity: 0,
//         isPurchased: false
//     })

//     const handleChange = event => {
//         let { id, value } = event.target;

//         if (id === 'quantity' && value < 0) {
//             value = 0;
//         } else if (id === 'item') {
//             value = value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//         } else if (id === 'units') {
//             value = value.toLowerCase();
//         }
//         setGrocery(prevGrocery => ({ ...prevGrocery, [id]: value }));
//     }

//     const handleClick = event => {
//         props.addItem(grocery);
//         setGrocery({
//             item: '',
//             units: '',
//             quantity: 0,
//             isPurchased: false
//         });
//     }

//     return (
//         <div className="form">
//             <input
//                 id="item"
//                 onChange={handleChange}
//                 value={grocery.item}
//                 type="text"
//             />
//             <input
//                 id="quantity"
//                 onChange={handleChange}
//                 value={grocery.quantity}
//                 type="number"
//             />
//             <input
//                 id="units"
//                 onChange={handleChange}
//                 value={grocery.units}
//                 type="text"
//             />
//             <button onClick={handleClick}>
//                 <span>Add</span>
//             </button>
//         </div>
//     );
// }

// export default Form;
