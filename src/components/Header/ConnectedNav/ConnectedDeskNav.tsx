import { Link } from "react-router-dom";
import { connectedMenuLinks } from "@/lib/menu-links";
import { DesktopNavButton } from "@/components/Header/Nav/NavButtons";
import { Button } from "@/components/ui/button";

import { logOutUser } from "@/service/authToBack";

export default function ConnectedDeskNav() {
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
                        <Button onClick={() => logOutUser()}>SE DÉCONNECTER</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
