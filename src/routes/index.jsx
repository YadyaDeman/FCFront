import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayouts from "../layout";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import HomePage from "../components/Calendar/HomePage"; 
import Calendar from "../components/Calendar/Calendar";
import MessagePage from "../components/MessagePage";


import DashboardPage from "../pages/DashboardPage";
import ChatsPage from "../pages/ChatsPage";
import TasksPage from "../pages/TasksPage";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: (
          <AuthLayouts>
            <RegisterPage />
          </AuthLayouts>
        ),
      },
      {
        path: "login",
        element: (
          <AuthLayouts>
            <LoginPage />
          </AuthLayouts>
        ),
      },
      {
        path: "home",
        element: <HomePage />, 
      },
      {
        path: "message/:userId",
        element: <MessagePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "chats",
        element: <ChatsPage />,
      },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
