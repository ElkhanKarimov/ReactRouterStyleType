import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PracticeAreas from './pages/PracticeAreas';
import Services from './pages/Services';
import Attorneys from './pages/Attorneys';
import About from './pages/About';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/practiceareas",
        element: <PracticeAreas />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/attorneys",
        element: <Attorneys />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />
      }
    ]
  }
])


const root = ReactDOM.createRoot(

  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
