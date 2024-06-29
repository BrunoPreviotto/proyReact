import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Alumno } from './model/Alumno';

import { Lista } from './pages/list/Lista';
import { Detalle } from './pages/detalle/Detalle';





const router = createBrowserRouter([
   {
    path: '/',
    element: <App/>
   },
   {
    path: '/alumnos',
    element: <Alumno/>
   },
   {
    path: '/detalle',
    element: <Detalle/>
   },
   {
    path: '/lista/:objetoParametro',
    element: <Lista></Lista>
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
