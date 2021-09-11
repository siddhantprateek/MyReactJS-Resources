import './App.css';
import copy from 'copy-text-to-clipboard';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <h4>Get 25% OFF ON THIS COUPON CODE</h4>
          <form>
            <button className="btn coupon"  onClick={() => {copy('VALUE25')}}>VALUE25</button>
          </form>  
        </div>
      </div>
    </div>
  );
}


export default App;
