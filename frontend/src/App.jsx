
// 

import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { toast } from 'sonner'
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
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },

])
function App() {
  const { user } = useSelector(store => store.auth);

  useEffect(() => {
    let socket;
    if (user) {
      const apiURL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";
      const socketUrl = apiURL.replace(/\/api\/v1\/?$/, "");

      socket = io(socketUrl, {
        query: { userId: user._id },
        transports: ['websocket']
      });

      socket.on("applicationStatusUpdate", (data) => {
        const message = `Application Update: Your application for "${data.jobTitle}" has been ${data.status.toUpperCase()}!`;
        if (data.status === 'accepted') {
          toast.success(message, { duration: 6000 });
        } else if (data.status === 'rejected') {
          toast.error(message, { duration: 6000 });
        } else {
          toast(message, { duration: 6000 });
        }
      });
    }

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [user]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App