import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal'; // Import Modal from react-modal
import { Route, Routes,Navigate  } from "react-router-dom";
import WomenListCard from './Pages/WomenListCard';
import Home from './Home';
import DetailsProduct from './Pages/WomenListCardAllSection/DetailsProduct';
import AllDetailsPaageSession from './Pages/DetailsPage/AllDetailsPaageSession';
import BasketPage from './Pages/DetailsPage/BasketPage';
import HeartList from './Pages/DetailsPage/HeartList';

function App() {
  return (
    <div className="App">
     
     <Routes>
         {/* <Route path='/' element={<NavbarTop/>}></Route> */}
         <Route path='/details' element={<WomenListCard />}></Route>
         <Route path='/' element={ <Home />}></Route>
         <Route path='/details/product/:id' element={<AllDetailsPaageSession/>}> </Route>
         <Route path='/basketpage' element={<BasketPage />}> </Route>
         <Route path='/heartlist' element={<HeartList/>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
