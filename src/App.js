import Join from './components/Join';
import Chat from './components/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Join />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
