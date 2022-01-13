function Grocery(props) {
    const {grocery} = props;
    return (
        <div className="grocery">
            <h1>{grocery.item}</h1>
            <p>{grocery.quantity} <small>{grocery.units}</small></p>
        </div>
    );
}
export default Grocery;