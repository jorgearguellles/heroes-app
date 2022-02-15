import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../ui/NavBar';

import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../hero/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="dc" element={<DcScreen/>} />
          <Route path="marvel" element={<MarvelScreen />} />
          
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />

          <Route path="/" element={<DcScreen />} />
        </Routes> 
      </div>
    </>
  )
}
