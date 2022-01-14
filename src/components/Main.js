import Grocery from "./Grocery";

function Main(props) {
    const { groceries, isPurchased, deleteItem } = props;
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
export default Main; 