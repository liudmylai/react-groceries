import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
      <Header />
      <Main groceries={groceries}/>
      <Footer />
    </div>
  );
}

export default App;