import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import SignInPage from './pages/SignInPage';


export default function App() {
  return (
    <>
       <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path='/' element={<SignInPage />} /> 
                </Routes>
       </BrowserRouter>
    </>
  )
}
