import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "@/store/AuthStore";

import Home from "@/pages/Home";
import Game from "@/pages/Game";
import Ranks from "@/pages/Ranks";
import Quizz from "@/pages/Quizz";
import Loggin from "@/pages/Loggin";
import Register from "@/pages/Register";
import MainLayout from "@/layouts/MainLayout";
import GameLayout from "@/layouts/GameLayout";
import RegisterDialog from "./components/AlertDialog/RegisterDialog";
import Account from "@/pages/users/Account";
import PrivateRoute from "@/routes/PrivateRoutes";

function App() {
    const { checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/connexion" element={<Loggin />} />
                    <Route
                        path="/inscription"
                        element={<Register />}
                        errorElement={<RegisterDialog error={""} />}
                    />
                    <Route path="/jouer" element={<Game />} />
                    <Route path="/jouer/:type" element={<GameLayout />}>
                        <Route index element={<Quizz />} />
                    </Route>
                    <Route path="/classements" element={<Ranks />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/compte" element={<Account />} />
                    </Route>
                </Route>
            </>
        )
    );

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
