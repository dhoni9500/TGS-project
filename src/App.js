import logo from './logo.svg';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Header from './Header';
import Home from './Pages/Home';
import Footer from './Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
   
    
  ]);


  return(
  <div className='main-container'> 
    <Header/>
  <RouterProvider router={router} />
 <Footer/>
 
 </div>);
  
}

export default App;
