import { Link } from "react-router-dom";

import ContentSection from "@/components/ContentSection";
import CourseSelector from "@/components/CourseSelector";
import useAuthToken from "@/hooks/useAuthToken";
import { Button } from "@/components/ui/button";

export default function Game() {
    const { userInfo } = useAuthToken();
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">Les jeux</h2>
            {!userInfo && (
                <>
                    <ContentSection>
                        <div className="my-10 ">
                            <div className="flex flex-row gap-4">
                                <Button
                                    className="font-semibold bg-slate-50 text-slate-950 hover:bg-slate-300 hover:text-slate-900"
                                    asChild
                                >
                                    <Link to="/connexion">
                                        Connecte toi Padawan !
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </ContentSection>
                    <ContentSection>
                        <div className="w-full md:mx-auto">
                            <h3 className="text-xl font-semibold">
                                Salut padawan
                            </h3>
                            <p>Choisi un thème et commence</p>
                            <CourseSelector />
                        </div>
                    </ContentSection>
                </>
            )}

            {userInfo && (
                <ContentSection>
                    <div className="w-full md:mx-auto">
                        <h3 className="text-xl font-semibold">
                            Salut {userInfo?.username}
                        </h3>
                        <p>Choisi un thème et commence</p>
                        <CourseSelector />
                    </div>
                </ContentSection>
            )}
        </>
    );
}
