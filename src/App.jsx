import { useRoutes } from 'react-router-dom'
import './App.css'
import About from './About';
import Glav from './Glav';
import Product from './Product'


function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <Glav />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/product',
      element: <Product />
    },
  ]);

  return router
}

export default App
