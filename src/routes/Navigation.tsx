import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { AboutPage } from "../01-lazyload/Pages/AboutPage";
import { HomePage } from "../01-lazyload/Pages/HomePage";
import { UsersPage } from "../01-lazyload/Pages/UsersPage";
import logo from "../logo.svg";
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} />
                    <ul>
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/users'>Users</NavLink></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='home' element={<HomePage />}/>
                    <Route path='about' element={<AboutPage />}/>
                    <Route path='users' element={<UsersPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
