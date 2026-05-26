import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { routes } from "./routes.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path} element={route.element} />
                ))}
            </Route>
        </Routes>
    );
}
