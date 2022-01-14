import { useState } from "react";

function Form(props) {
    const [grocery, setGrocery] = useState({
        item: '',
        units: '',
        quantity: 0,
        isPurchased: false
    })

    const handleChange = event => {
        let { id, value } = event.target;

        if (id === 'quantity' && value < 0) {
            value = 0;
        } else if (id === 'item') {
            value = value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        } else if (id === 'units') {
            value = value.toLowerCase();
        }
        setGrocery(prevGrocery => ({ ...prevGrocery, [id]: value }));
    }

    const handleClick = event => {
        props.addItem(grocery);
        setGrocery({
            item: '',
            units: '',
            quantity: 0,
            isPurchased: false
        });
    }

    return (
        <div className="form">
            <input
                id="item"
                onChange={handleChange}
                value={grocery.item}
                type="text"
            />
            <input
                id="quantity"
                onChange={handleChange}
                value={grocery.quantity}
                type="number"
            />
            <input
                id="units"
                onChange={handleChange}
                value={grocery.units}
                type="text"
            />
            <button onClick={handleClick}>
                <span>Add</span>
            </button>
        </div>
    );
}
export default Form;