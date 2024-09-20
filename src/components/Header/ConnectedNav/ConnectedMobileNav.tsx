import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { MobileNavButton } from "@/components/Header/Nav/NavButtons";
import { connectedMenuLinks } from "@/lib/menu-links";


export default function ConnectedMobileNav() {
    const handleLogout = () => {
        Cookies.remove("token");
        localStorage.removeItem("score");
    }

    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent aria-description="Menu principal" side={"top"}>
                    <SheetDescription className="flex flex-row justify-between items-center space-y-0"></SheetDescription>
                    <SheetTitle className="flex flex-row justify-between items-center space-y-0"></SheetTitle>
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        <span></span>
                        <SheetClose asChild>
                            <Button variant="ghost" className="">
                                <X className="h-4 w-4 text-slate-50" />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <ul className="w-full flex flex-col items-center gap-3">
                        {connectedMenuLinks.map((link) => (
                            <MobileNavButton key={link.id} {...link} />
                        ))}
                        <li className="text-slate-50">
                            <Link to="/connexion" onClick={handleLogout}>
                                <SheetClose asChild>
                                    <Button  variant="ghost">
                                        SE DÉCONNECTER
                                    </Button>
                                </SheetClose>
                            </Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
