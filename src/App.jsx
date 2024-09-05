import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import publicRoutes from './routes/routes'


function App() {
  

  return (
    <>
    <RouterProvider router={publicRoutes}>

    </RouterProvider>
     <h1 className='active-heading'>Hello world</h1>
    </>
  )
}

export default App
