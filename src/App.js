import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from './pages/Register';
import TodoPage from './pages/TodoPage';
import { AuthProvider } from './components/AuthContext';

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
          <Route path="/todos" element={<TodoPage />} />
        </Routes>
        </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
