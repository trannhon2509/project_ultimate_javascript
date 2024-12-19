import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRoute, routes } from './routes/AppRoute';

function App() {
  console.log(routes); // Example usage of the routes object
  return (
    <>
      <AppRoute />
    </>
  )
}

export default App
