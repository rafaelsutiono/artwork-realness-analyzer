import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {

  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
