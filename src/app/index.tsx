import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {MainPage} from "../pages/mainPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {store} from "../shared/lib/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },

])

root.render(

    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
