import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Admin from '../pages/Admin';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './RoutePath';
import BasicLayout from '../layouts/BasicLayout'; // Import BasicLayout
import AdminLayout from '../layouts/AdminLayout';

const routes = {
  public: [
    { path: PUBLIC_ROUTES.HOME, element: <Home />, layout: BasicLayout },
    // ...other public routes
  ],
  private: {
    user: [
      { path: PRIVATE_ROUTES.USER.DASHBOARD, element: <User />, layout: BasicLayout },
      // ...other user routes
    ],
    admin: [
      { path: PRIVATE_ROUTES.ADMIN.DASHBOARD, element: <Admin />, layout: AdminLayout },
      // ...other admin routes
    ],
    // ...other roles
  }
};

function AppRoute() {
  return (
    <Router>
      <Routes>
        {routes.public.map((route, index) => {
          const Layout = route.layout || React.Fragment;
          return (
            <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
          );
        })}
        {Object.values(routes.private).flat().map((route, index) => {
          const Layout = route.layout || React.Fragment;
          return (
            <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
          );
        })}
      </Routes>
    </Router>
  );
}

export { AppRoute, routes };
