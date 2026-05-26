import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <NotFound /> },
];
