import Header from './components/Header/Header'

import LoginPage from './pages/Login/LoginPage';
import CreateProjectPage from './pages/CreateProject/CreateProgectPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import MainPage from './pages/MainPage/MainPage';
import PerformanceWorksPage from './pages/PerformanceWorksPage/PerformanceWorksPage';
import { useAppContext } from './contexts/AppContext';
import { Route, Routes } from 'react-router-dom'

function App() {

  const { auth } = useAppContext();

  return (
    <div className="App">
      <div className='container'>
        <Header />
        {auth ? (
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/project/:id' element={<ProjectPage />} />
            <Route path='create' element={<CreateProjectPage />} />
            <Route path='Performance' element={<PerformanceWorksPage />} />
          </Routes>
        ) : (
          <LoginPage />
        )}
      </div>
    </div>
  );
}

export default App;
