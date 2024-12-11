import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css'
import UserDetails from './UserDetails';
import Users  from './Users ';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
