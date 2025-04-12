import { Suspense, lazy } from 'react';
import './App.css';
import Loader from './components/Loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Homepage = lazy(() => import('./components/Homepage'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
