import { useMediaQuery } from "usehooks-ts";

import DeskNav from "@/components/Header/Nav/DeskNav";
import MobileNav from "@/components/Header/Nav/MobileNav";

export default function Header() {
    return (
        <header className="flex bg-slate-950 items-center justify-between p-4 fixed z-50 top-0 w-full h-28">
            <h1 className="w-full text-center md:text-start text-xl font-bold">
                NinjaQuiz
            </h1>
            <NavChooser />
        </header>
    );
}

function NavChooser() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return isMobile ? <MobileNav /> : <DeskNav />;
}
