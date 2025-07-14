import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/movie/:id',
        element: <MovieDetails />,
    }
])

export default router