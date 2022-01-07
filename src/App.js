
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
     <Header />
     <div className='app_body'>
       <Sidebar />
       {/* React-Router -> Chat screen */}
     </div>
    </div>
  );
}

export default App;
