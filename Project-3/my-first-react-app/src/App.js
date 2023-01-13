import './App.css';
import MyComponent from './components/MyComponent';
import Contacts from './views/Contact';

function App() {
  const myStyle = {
    color: 'purple',
    backgroundColor: 'yellow',
    display: "inline-block",
    padding: "30px",
    border: "5px solid purple"
    
  }

  return (
    <div className="App">
      <Contacts />
      <h1 className='tomato'>Hey, Ercan is learning React! :)))</h1>
      <h2 className='blue'>this should appear blue</h2>
      <h3 className='blue' style={{color: "yellowgreen" }}>inline style</h3>
      <h4 className='blue' style={myStyle}>style object</h4>


      <MyComponent />
    </div>
  );
}

export default App;
