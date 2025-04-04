import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
import DashboardPage from "../pages/DashboardPage";
import ChatsPage from "../pages/ChatsPage";
import TasksPage from "../pages/TasksPage";
import CalendarPage from "../pages/CalendarPage";
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
        element: <Home />,
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
        element: <CalendarPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      
      
    ],
  },
]);

export default router;
