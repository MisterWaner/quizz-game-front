import { useAuthStore } from "@/store/AuthStore";
import { User } from "@/lib/types";

export default function Account() {
    const user = useAuthStore((state) => state.user);
    const { username, score, global_score } = user as User;
    return (
        <div>
            <h1>Mon compte</h1>
            <p>Nom d'utilisateur : {username}</p>
            <p>Score : {score}</p>
            <p>Score global : {global_score}</p>
        </div>
    )
}
