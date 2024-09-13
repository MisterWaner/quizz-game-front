import useCookie from "@/hooks/useCookie";

export default function Account() {
    const { username, score, global_score } = useCookie();
    return (
        <div>
            <h1 className="text-3xl">Bonjour {username}</h1>
            <p>Nom d'utilisateur : {username}</p>
            <p>Score : {score}</p>
            <p>Score global : {global_score}</p>
        </div>
    )
}
