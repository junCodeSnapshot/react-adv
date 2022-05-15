import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { UsersPage, AboutPage } from "../01-lazyload/Pages";
import { ShoppingPages } from "../02-components-patterns/pages/ShoppingPages";
import logo from "../logo.svg";
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? "nav-active" : "")}>Shopping</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => (isActive ? "nav-active" : "")}>About</NavLink></li>
                        <li><NavLink to='/users' className={({ isActive }) => (isActive ? "nav-active" : "")}>Users</NavLink></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<ShoppingPages />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='users' element={<UsersPage />} />
                    <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
