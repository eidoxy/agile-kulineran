import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

const Routes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  }
];

export default Routes;