import { menuLinks } from "@/lib/menu-links";
import { DesktopNavButton } from "./NavButtons";

export default function DeskNav() {
    return (
        <nav className="w-full max-md:hidden">
            <ul className="w-full flex justify-end items-center gap-3">
                {menuLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                        <DesktopNavButton {...link} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
