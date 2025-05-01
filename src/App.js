import { Suspense, lazy } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';

const Homepage = lazy(() => import('./components/Homepage'));

const App = () => (
  <HashRouter>
    <Suspense fallback={
      <div className='w-full h-screen flex justify-center items-center bg-gray-700'>
        <BounceLoader
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
