import './App.css';
import Login from './pages/Login.jsx';
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./Components/NavBar.jsx" 
import LeftBar from "./Components/LeftBar.jsx" 
import RightBar from "./Components/RightBar.jsx" 
import {BrowserRouter, Routes, Route, Outlet, createBrowserRouter,Navigate, RouterProvider} from "react-router-dom"



function App() {

  const currentUser = true;
  const Layout = () => {
    return (
      <div >
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser)  {
      return <Navigate to="/login" />;
    }

    return children;
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;