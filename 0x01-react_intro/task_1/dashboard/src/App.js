import logo from './logo_hol.jpg'
import './App.css';
import {getFullYear, getFooterCopy} from './utils'

function App() {
  return (
    <>
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
        <p><i>Copyright {getFullYear()} - {getFooterCopy()}</i></p>
      </footer>
    </>
  );
}

export default App;
