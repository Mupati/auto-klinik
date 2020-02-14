import { lazy } from 'react'

import Logout from './Logout'
import Vehicle from './Vehicle'
import Loader from './loader'
import Footer from './Footer'
import Header from './Header'
const LandingPage = lazy(() => import('./Landing'))
const AdminDashboard = lazy(() => import('./AdminDashboard'))
const DriverDashboard = lazy(() => import('./DriverDashboard'))
const Dashboard = lazy(() => import('./Dashboard'))
const Login = lazy(() => import('./Login'))
export {
  LandingPage,
  AdminDashboard,
  DriverDashboard,
  Dashboard,
  Login,
  Logout,
  Vehicle,
  Loader,
  Footer,
  Header,
}
