import { useRoutes } from 'react-router-dom'
import './App.css'
import About from './About';
import Glav from './Glav';
import Product from './Product';
import News from './News';
import Dostij from './Dostij';

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
    {
      path: '/news',
      element: <News />
    },
    {
      path: '/dostij',
      element: <Dostij />
    },
  ]);

  return router
}

export default App
