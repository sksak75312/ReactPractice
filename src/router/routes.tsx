import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Layout from '../pages/layout';
import MealSystem from '../pages/mealSystem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'mealsystem',
        element: <MealSystem />
      }
    ],
  },
]);

export default router;
