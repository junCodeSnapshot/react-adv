import { lazy, LazyExoticComponent } from "react";
// import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyLoad1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyLoad2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyLoad3"));

export const routes: Route[] = [
    {
        to: "/lazy1",
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy1'
    },
    {
        to: "/lazy2",
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy2'

    },
    {
        to: "/lazy3",
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy3'
    }
]
