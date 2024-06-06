import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import IngredientsPage from './pages/IngredientsPage';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='add-ingredients' element={<IngredientsPage />} />
      <Route path='recipes' element={<RecipesPage />} />
      <Route path='recipes/:id' element={<RecipePage />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
