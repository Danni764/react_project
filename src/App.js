import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RouteLayout from './ui/Routelayout'
import Syllabus from './ui/features.js/Syllabus'
import Admissions from './ui/features.js/Admissions'
import Program from './ui/features.js/Program'
import Home from './ui/features.js/Home'
import Notice from './ui/features.js/Notice'
import Staffdetails from './ui/features.js/Staffdetails'
const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true, element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'program', element:<Program/>},
    {path:'staffdetails',element:<Staffdetails/>},
    {path:'admissions', element:<Admissions/>},
    {path:'notice', element:<Notice/>},
    {path:'syllabus',element:<Syllabus/>},
    {path:''}
]
}])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
