import { NavLink as Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet";

type NavButtonsProps = {
    label: string;
    path: string;
    id: number;
};

export function MobileNavButton({ label, path, id }: NavButtonsProps) {
    return (
        <li key={id} className="text-slate-50">
            <Link to={path}>
                <SheetClose asChild>
                    <Button variant="ghost">{label.toUpperCase()}</Button>
                </SheetClose>
            </Link>
        </li>
    );
}

export function DesktopNavButton({ label, path, id }: NavButtonsProps) {
    return (
        <li key={id}>
            <Link to={path}>
                <Button variant="ghost">{label.toUpperCase()}</Button>
            </Link>
        </li>
    );
}
