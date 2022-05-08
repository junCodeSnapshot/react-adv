import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
const LazyLayoutComponent = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/layout/LazyLayout"));

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyLoad1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyLoad2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyLoad3"));

export const routes: Route[] = [
    //Lazyload
    {
        to: "/lazyload/",
        path: '/lazyload/*',
        Component: LazyLayoutComponent,
        name: 'Lazy-Layout'
    },
    //Static
    {
        to: "/no-lazy",
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'

    },
    // {
    //     to: "/lazy3",
    //     path: 'lazy3',
    //     Component: Lazy3,
    //     name: 'Lazy3'
    // }
]

export const lazyChildRoutes: Route[] = [
    {
        Component: Lazy1,
        name: 'Lazy - 1',
        path: 'lazy1',
        to: 'lazy1'
    },
    {
        Component: Lazy2,
        name: 'Lazy - 2',
        path: 'lazy2',
        to: 'lazy2'
    },
    {
        Component: Lazy3,
        name: 'Lazy - 3',
        path: 'lazy3',
        to: 'lazy3'
    }
]