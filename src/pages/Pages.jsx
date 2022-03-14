import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './HomePage';
import CuisinePage from './CuisinePage';
import SearchedPage from './SearchedPage';
import RecipePage from './RecipePage';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cuisine/:type" element={<CuisinePage/>}/>
        <Route path="/searched/:search" element={<SearchedPage/>}/>
        <Route path="/recipe/:id" element={<RecipePage/>}/>
      </Routes>
    </AnimatePresence>
  )
}

export default Pages;