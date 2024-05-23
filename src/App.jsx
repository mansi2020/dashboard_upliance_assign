import "./App.css";
// import Counter from './Components/Counter/Counter'
import HomePage from "./Components/HomePage/HomePage";
import SignUp from "./Components/Authentication/SignUp";
import LogIn from "./Components/Authentication/LogIn";
import { ContextProvider } from "./Context/Context";
import firebase from "./firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";

function App() {
  // router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
  ]);

  return (
    <AuthProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
