import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Fotter from './components/Fotter';

import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Home from './pages/Home';
import Write from './pages/Write.js';
import "./style.scss"
import { AuthContextProvider } from './context/authContext';




const Layout =()=>{
return(
  <>
  <Nav />
  <Outlet />
  <Fotter />

  </>
);

}

const router = createBrowserRouter ([


  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />,
      },

      {
        path:'/post/:id',
        element:<Single />,
      },

     {

      path:'/write',
      element:<Write />,
     },
    ]
  },

 {

  path:'/register',
  element : <Register />
 },

 {

  path:'/login',
  element: <Login />,

 },

]);



function App() {
  return (
 <div>
  
 
  <div className="App">
    <div className="container">

    <RouterProvider router={router} />

  
    </div>
  </div>

 </div>

  );
}

export default App;
