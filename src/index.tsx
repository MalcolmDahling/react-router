import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { NotFound } from './components/NotFound/NotFound';
import { Product } from './components/Product/Product';

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/product/:id" element={<Product/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>

            <App />
        </BrowserRouter>
        
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
