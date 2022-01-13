import Grocery from "./Grocery";

function Main(props) {
    const {groceries} = props;
    return (
        <div>
            {groceries.map((grocery, index) => <Grocery grocery={grocery} key={index} />)}
        </div>
    );
}
export default Main; 