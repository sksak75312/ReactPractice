import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Layout from '../pages/layout';
import MealSystem from '../pages/mealSystem';
import DrinkSystem from '../pages/drinkSystem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'mealsystem',
        element: <MealSystem />
      },
      {
        path: 'drinksystem',
        element: <DrinkSystem />
      }
    ],
  },
]);

export default router;
