import { createBrowserRouter } from "react-router-dom";
import { Index } from "../users/pages";
import { Create } from "../users/pages/create";
import { Update } from "../users/pages/update";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'users',
                children: [
                    {
                        index: true,
                        element: <Index />,
                        children={

                            path: '/users',
                            element: <Index />
                        },
{
                        path: 'users/create',
                        element: <Create />
                    },
                    {
                        path: 'users/:userId/edit',
                        element: <Update />
                    }
                    },

        ]
    }
]
    }
   

])

export default router