import { Suspense, lazy } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';

const Homepage = lazy(() => import('./components/Homepage'));

const App = () => (
  <HashRouter>
    <Suspense fallback={
      <div className='w-full h-screen flex justify-center items-center bg-workspace-dark'>
        <HashLoader
        color="#2430ca"
        cssOverride={{}}
        size={150}
      />
      </div>
    }>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
