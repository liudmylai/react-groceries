import './App.css';
import Layout from './components/Layout';

const groceries = [
  {
    item: 'Milk',
    units: 'liter',
    quantity: 1,
    isPurchased: false
  },
  {
    item: 'Apples',
    units: 'lb',
    quantity: 4,
    isPurchased: false
  },
  {
    item: 'Coca-Cola',
    units: 'pack',
    quantity: 1,
    isPurchased: false
  }
];

function App() {
  return (
    <div className="App">
      <Layout groceries={groceries}/>
    </div>
  );
}

export default App;