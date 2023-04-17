import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Cart from './Cart';
import Store from './Store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Store",
    element: <Store />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
