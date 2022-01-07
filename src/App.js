
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat/Chat';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
     <div className='app_body'>
       <Sidebar />
       {/* React-Router -> Chat screen */}

       <Routes>
         <Route path="/room/:romId" element={<Chat/>} />
            

         {/* <Route exact path="/" /> */}
             
       </Routes>
     </div>
     </Router>
    </div>
  );
}

export default App;
