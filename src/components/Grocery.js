function Grocery(props) {
    const { grocery, id, isPurchased, deleteItem } = props;


    const handleClick = event => {
        isPurchased(id)
    }

    const handleDelete = event => {
        deleteItem(id)
    }

    return (
        <div className="item">
            <li style={{ textDecoration: grocery.isPurchased ? "line-through" : "none" }} onClick={handleClick}>
                {grocery.item} - {grocery.quantity} <small>{grocery.units}</small>
            </li>
            <span class="close" onClick={handleDelete}>×</span>
        </div>
    );
}
export default Grocery;