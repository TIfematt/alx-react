import logo from './logo_hol.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'> 
        <img src={logo} alt=''/>
        <h1>School dashboard</h1>
      </header>
      <div className='line' ></div>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <footer className='App-footer'>
        <div className='line footer-line' ></div>
        <p><i>Copyright 2020 - holberton School</i></p>
      </footer>
    </div>
  );
}

export default App;
