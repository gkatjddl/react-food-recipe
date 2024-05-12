import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/details/details';
import DetailItem from './components/detail-item/detail-item';
import Navbar from './components/navbar/navbar';
import ConText from './context/context';
import Favorites from './pages/favorites/favorites';
import Home from './pages/home/home';
import GlobalState from './context/context';

// 쿼리 파라미터(동적으로 URL을 설정하는 페이지)

function App() {
  return (
    <div className='base-container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/' element={<DetailItem/>}></Route>
        <Route path='/' element={<GlobalState/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
