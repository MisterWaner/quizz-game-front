import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Home from "@/pages/Home";
import Game from "@/pages/Game";
import Ranks from "@/pages/Ranks";
import Quizz from "@/pages/Quizz";
import Loggin from "@/pages/Loggin";
import MainLayout from "@/layouts/MainLayout";
import GameLayout from "@/layouts/GameLayout";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/connexion" element={<Loggin />} />
                    <Route path="/jouer" element={<Game />} />
                    <Route path="/jouer/:type" element={<GameLayout />}>
                        <Route index element={<Quizz />} />
                    </Route>
                    <Route path="/classements" element={<Ranks />} />
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
