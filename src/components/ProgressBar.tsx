import { Progress } from "@/components/ui/progress";
import { useCourseStore } from "@/store/CoursesStore";

export default function ProgressBar() {
    const progress = useCourseStore((state) => state.progress);

    if (progress < 40) {
        return (
            <Progress
                value={progress}
                className="md:w-1/2 mx-auto mt-24"
                indicatorColor="bg-red-500"
            />
        );
    } else if (progress >= 40 && progress <= 70) {
        return (
            <Progress
                value={progress}
                className="md:w-1/2 mx-auto mt-24"
                indicatorColor="bg-yellow-500"
            />
        );
    } else if (progress > 70 && progress <= 100) {
        return (
            <Progress
                value={progress}
                className="md:w-1/2 mx-auto mt-24"
                indicatorColor="bg-green-500"
            />
        );
    }
}
