import Container from "@components/layout/Container";
import HomePage from "@pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: (
            <Container />
        ),
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
])

export default function Router() {
    return <RouterProvider router={router} />;
}