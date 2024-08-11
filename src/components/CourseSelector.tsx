import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { courseSelectorData } from "@/lib/course-selector-data";
import { Course } from "@/lib/types";

export default function CourseSelector() {

    const courseSelector = courseSelectorData;

    return (
        <div className="mt-4 grid grid-cols-2 gap-4 md:w-2/4 ">
            {courseSelector.map(({ label, courses }) => (
                <DropdownMenu key={label}>
                    <DropdownMenuTrigger asChild>
                        <Button className="w-full">{label}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {courses.map(({ id, title, path, type }: Course) => (
                            <DropdownMenuItem key={id}>
                                <Link
                                    to={`/jouer/${path}`}
                                    className="w-full"
                                    onClick={() => {
                                        console.log(type);
                                    }}
                                >
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
}
