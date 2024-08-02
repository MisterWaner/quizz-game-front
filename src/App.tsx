import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Home from "@/pages/Home";
import Game from "@/pages/Game";
import Ranks from "@/pages/Ranks";
import Loggin from "@/pages/Loggin";
import MainLayout from "@/layouts/MainLayout";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/connexion" element={<Loggin />} />
                    <Route path="/jouer" element={<Game />} />
                    <Route path="/classements" element={<Ranks />} />
                </Route>
            </>
        )
    );

    return (
        <div  className="bg-slate-950 text-slate-50 w-screen h-screen">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
