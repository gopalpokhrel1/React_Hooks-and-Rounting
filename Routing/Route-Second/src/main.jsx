import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Blog from './Components/Blog.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       }
//       ,
//       {
//         path:'about',
//         element: <About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       },{path:'blog', element:<Blog/>},
//       {path:'home', element:<Home/>}
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='blog' element={<Blog/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
