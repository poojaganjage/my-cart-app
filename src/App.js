import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import {useGlobalContext} from './context';

function App() {
  const {loading} = useGlobalContext();
  if(loading) {
    return (
      <div className='loading'>
        <h1>loading</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <CartContainer />
      </div>
    );
  }
}
export default App;
