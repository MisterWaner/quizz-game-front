import useAuthToken from "@/hooks/useAuthToken";
import useRedirect from "@/hooks/useRedirect";

export default function Account() {
    const { userInfo } = useAuthToken();
    useRedirect();
    return (
        <div>
            <h1 className="text-3xl">Salut {userInfo?.username}</h1>
            
            <p>Ton score journalier est : {userInfo?.score}</p>
            <p>Ton score mensuel est : {userInfo?.global_score}</p>
        </div>
    )
}
