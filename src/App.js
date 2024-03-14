import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Contact from './Contact/Contact'
import About from './About/About'
import NotFound from './NotFound/NotFound'
import Portfolio from './Portfolio/Portfolio'
import Home from './Home/Home'

export default function App() {
let Routers =createBrowserRouter([
  {path:'',element:<Layout></Layout>,children:[
    {index:true, element:<Home></Home>},
    {path:'Portfolio', element:<Portfolio></Portfolio>},
    {path:'about',element:<About></About>},
    {path:'contact',element:<Contact></Contact>},
    {path:'*',element:<NotFound></NotFound>}
  ]}
])



  return (
    <RouterProvider router={Routers}/>
  )
}

