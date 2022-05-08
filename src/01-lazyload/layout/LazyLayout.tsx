import { NavLink, Route, Routes } from "react-router-dom";
import { lazyChildRoutes } from "../../routes/routes";

export const LazyLayout = () => {
    return (
        <div className="nav">
            <h1>LazyLayout page</h1>
            {/* Rutas hijas iran aqui */}
            <ul >
                {lazyChildRoutes.map(({ to, name }) => (
                    <li key={name}> <NavLink to={to}>{name}</NavLink> </li>
                ))}
            </ul>
            <Routes>
                {lazyChildRoutes.map(({ Component, path }) => (
                    <Route path={path} element={<Component />} />
                ))}
            </Routes>
        </div>
    )
}
export default LazyLayout;
