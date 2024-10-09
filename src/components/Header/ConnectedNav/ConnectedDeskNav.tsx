import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { connectedMenuLinks } from "@/lib/menu-links";
import { DesktopNavButton } from "@/components/Header/Nav/NavButtons";
import { Button } from "@/components/ui/button";
import { updateCurrentMonthScore } from "@/service/sendDataToBack";
import useAuthToken from "@/hooks/useAuthToken";

export default function ConnectedDeskNav() {
    const {userInfo} = useAuthToken();
    const handleLogout = async () => {
        try {
            const score = Number(localStorage.getItem("score"));
            const current_month_score: number = userInfo?.current_month_score ?? 0;
            const response = await updateCurrentMonthScore(score, current_month_score);

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
