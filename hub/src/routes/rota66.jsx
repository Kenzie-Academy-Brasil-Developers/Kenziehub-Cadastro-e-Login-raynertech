import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dash';

const Rota66 = () => {
  const [token, setAuthenticated] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('@kenzieHub:token');
    if (token) {
      setAuthenticated(token);
    }
  }, [token]);

  return (
    <Routes>
      {!token ? (
        <Route
          path="/"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
      ) : (
        <Route
          path="/"
          element={<Dashboard setAuthenticated={setAuthenticated} />}
        />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Rota66;
