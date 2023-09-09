import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/message" element={<MessagePage />} />
      </Route>
    </Routes>
  );
}

export default App;