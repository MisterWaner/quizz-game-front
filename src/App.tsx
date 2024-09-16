import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import useAuthToken from "@/hooks/useAuthToken";

import Home from "@/pages/Home";
import Game from "@/pages/Game";
import Ranks from "@/pages/Ranks";
import Quizz from "@/pages/Quizz";
import Loggin from "@/pages/Loggin";
import Register from "@/pages/Register";
import MainLayout from "@/layouts/MainLayout";
import GameLayout from "@/layouts/GameLayout";
import AccountLayout from "@/layouts/AccountLayout";
import RegisterDialog from "./components/AlertDialog/RegisterDialog";
import Account from "@/pages/users/Account";
import ConnectedGame from "./pages/users/ConnectedGame";

function App() {
    const { token } = useAuthToken();
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/connexion" element={<Loggin />} />
                    <Route
                        path="/inscription"
                        element={<Register />}
                        errorElement={<RegisterDialog error={""} />}
                    />
                    <Route path="/jouer"  element={token ? <ConnectedGame /> : <Game />} />
                    <Route path="/jouer/:type" element={<GameLayout />}>
                        <Route index element={<Quizz />} />
                    </Route>
                    <Route path="/classements" element={<Ranks />} />
                </Route>
                <Route path="/compte" element={<AccountLayout />}>
                    <Route index element={<Account />} />
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
