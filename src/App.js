import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from './pages/Register';
import { AuthProvider } from './components/AuthContext';
import EditTodo from './components/EditTodo';
import TodoDetail from './components/TodoDetail';
import AddTodo from './components/AddTodo' ;

function App() {
  
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:taskId" element={<EditTodo />} />
          <Route path="/tasks/:taskId" element={<TodoDetail />} />
          <Route path="/addtodo" element={<AddTodo />} />
        </Routes>
        </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
