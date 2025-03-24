// Componente principal de la aplicación
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/usuario/:id" element={<UserDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
