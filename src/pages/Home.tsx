import ContentSection from "@/components/ContentSection";
import SignUp from "@/components/Modals/SignUp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">Accueil</h2>
            <ContentSection>
                <p>
                    Bienvenue à toi jeune Padawan, si tu es ici c&apos;est que
                    tu as envie de faire des mathématiques.
                </p>
                <br />
                <p>
                    <span className="font-bold">Apprends</span>,{" "}
                    <span className="font-bold">Progresse</span>,{" "}
                    <span className="font-bold">Gagne</span> et deviens un{" "}
                    <span className="font-bold text-primary">PRO</span> des
                    maths.
                </p>
                <div className="my-10 w-full md:w-2/4 md:mx-auto">
                    <div className="grid grid-flow-col auto-cols-fr gap-4 ">
                        <Button className="font-semibold bg-slate-50 text-slate-950 hover:bg-slate-300 hover:text-slate-900" asChild>
                            <Link to="/connexion">Se connecter</Link>
                        </Button>
                        <Button className="font-semibold bg-slate-50 text-slate-950 hover:bg-slate-300 hover:text-slate-900" asChild>
                            <Link to="/jouer">Découvrir</Link>
                        </Button>
                    </div>
                </div>
                <div>
                    <p className="font-bold">
                        Tu n&apos;as pas encore de compte ?
                    </p>
                    <div className="mb-4">
                        Tu peux {<SignUp label="créer ton compte" />}
                        gratuitement pour jouer autant que tu veux et
                        sauvegarder ta progression.
                    </div>
                    <p>
                        Ou alors tu peux jouer en tant{" "}
                        <Link to="/jouer" className="font-bold text-primary">
                            qu&apos;invité
                        </Link>{" "}
                        pour essayer, mais ta progression ne saura pas
                        sauvegarder et ton nombre de vie sera limité.
                    </p>
                </div>
            </ContentSection>
        </>
    );
}
