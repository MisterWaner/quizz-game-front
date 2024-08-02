import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetDescription
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { MobileNavButton } from "./NavButtons";
import { menuLinks } from "@/lib/menu-links";

export default function MobileNav() {
  return (
    <nav className="md:hidden">
        <Sheet >
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
                        {menuLinks.map((link) => (
                            <MobileNavButton key={link.id} {...link} />
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
    </nav>
  )
}
