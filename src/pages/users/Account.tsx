import useAuthToken from "@/hooks/useAuthToken";
import useRedirect from "@/hooks/useRedirect";
import { useCourseStore } from "@/store/CoursesStore";

export default function Account() {
    const { userInfo } = useAuthToken();
    const dailyScore = useCourseStore((state) => state.dailyScore);
    const totalScore = (userInfo?.score ?? 0) + dailyScore;
    useRedirect();
    return (
        <div>
            <h1 className="text-3xl">Salut {userInfo?.username}</h1>
            
            <p>Ton score journalier est : {totalScore}</p>
            <p>Ton score mensuel est : {userInfo?.global_score}</p>
        </div>
    )
}
