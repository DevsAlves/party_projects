import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App.jsx";

//Pages
import CreateParty from "./routes/CreateParty.jsx";
import Home from "./routes/Home.jsx";
import EditParty from "./routes/EditParty.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Party from "./routes/Party.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/party/new",
        element: <CreateParty />,
      },
      {
        path:"/party/:id",
        element: <Party/>
      },
      {
        path:"/party/edit/:id",
        element: <EditParty/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
