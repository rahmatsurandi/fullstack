import './App.css';
import UserList from './components/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from '../src/components/AddUser'
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <div className="py-5">
        <Routes>
          <Route exact path="/" element={<UserList />} />
          <Route exact path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />

        </Routes>
      </div >
    </BrowserRouter>

  );
}

export default App;
