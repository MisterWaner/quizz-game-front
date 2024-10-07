import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { connectedMenuLinks } from "@/lib/menu-links";
import { DesktopNavButton } from "@/components/Header/Nav/NavButtons";
import { Button } from "@/components/ui/button";

const BASE_URL = "http://localhost:3001";

export default function ConnectedDeskNav() {
    const handleLogout = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/auth/update-current-month-score`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                Cookies.remove("token");
                localStorage.removeItem("score");
            } else {
                throw new Error("Une erreur est survenue lors de la déconnexion");
            }   
        } catch (error) {
            console.error("Une erreur est survenue lors de la déconnexion", error);
        }
    };
    return (
        <nav className="w-full max-md:hidden">
            <ul className="w-full flex justify-end items-center gap-3">
                {connectedMenuLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                        <DesktopNavButton {...link} />
                    </li>
                ))}
                <li>
                    <Link to="/connexion">
                        <Button onClick={handleLogout} variant={"ghost"}>
                            SE DÉCONNECTER
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
