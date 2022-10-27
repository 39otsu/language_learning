import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ROUTE_PATHS } from './data/types';
import './App.css';

const Home = lazy(() => import('./components/home'));
const Directory = lazy(() => import('./components/directory'));
const Word = lazy(() => import('./components/word'));

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Suspense fallback={<LinearProgress/>}>
        <Routes>
          <Route exact path={ROUTE_PATHS.home} element={<Home/>}/>
          <Route exact path={ROUTE_PATHS.directory} element={<Directory/>}/>
          <Route exact path={ROUTE_PATHS.word} element={<Word/>}/>
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
