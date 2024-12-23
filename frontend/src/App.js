import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my book store</h1>
        <button className='book-button' onClick={()=> navigate('/books')}>Get started</button>
      </header>
    </div>
  );
}

export default App;
