import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'


const appRouter = createBrowserRouter([
  {
    path: 'https://vercel-job-portal-backend.vercel.app/',
    element: <Home />
  },
  {
    path: 'https://vercel-job-portal-backend.vercel.app/login',
    element: <Login />
  },
  {
    path: 'https://vercel-job-portal-backend.vercel.app/signup',
    element: <Signup />
  },
  {
    path: "https://vercel-job-portal-backend.vercel.app/jobs",
    element: <Jobs />
  },
  {
    path: "https://vercel-job-portal-backend.vercel.app/description/:id",
    element: <JobDescription />
  },
  {
    path: "https://vercel-job-portal-backend.vercel.app/browse",
    element: <Browse />
  },
  {
    path: "https://vercel-job-portal-backend.vercel.app/profile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  {
    path:"https://vercel-job-portal-backend.vercel.app/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"https://vercel-job-portal-backend.vercel.app/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"https://vercel-job-portal-backend.vercel.app/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"https://vercel-job-portal-backend.vercel.app/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"https://vercel-job-portal-backend.vercel.app/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"https://vercel-job-portal-backend.vercel.app/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
