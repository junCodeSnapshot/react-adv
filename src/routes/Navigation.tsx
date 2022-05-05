import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../01-lazyload/pages';
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo' />
                    <ul>
                        <li>
                            <NavLink to='/lazy1' className={ ({isActive}) => isActive? 'nav-active' : ''}>LazyLoad1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={ ({isActive}) => isActive? 'nav-active' : ''}>LazyLoad2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3'className={ ({isActive}) => isActive? 'nav-active' : ''}>LazyLoad3</NavLink>
                        </li>
                    </ul>
                </nav>
            <Routes>
                <Route path='/lazy3' element={<LazyLoad3 />} />
                <Route path='/lazy2' element={<LazyLoad2 />} />
                <Route path='/lazy1' element={<LazyLoad1 />} />
                <Route path='/*' element={<Navigate to='/lazy1'/>} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}
