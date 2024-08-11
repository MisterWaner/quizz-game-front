import ContentSection from "@/components/ContentSection";
import CourseSelector from "@/components/CourseSelector";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Game() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">Les jeux</h2>
            <ContentSection>
                <div className="my-10 ">
                    <div className=" ">
                        <Button className="font-semibold bg-slate-50 text-slate-950 hover:bg-slate-300 hover:text-slate-900" asChild>
                            <Link to="/connexion">Connecte toi Padawan !</Link>
                        </Button>
                        {/* <InvitedUserModal /> */}
                    </div>
                </div>
            </ContentSection>
            <ContentSection>
                <div className="w-full md:mx-auto">
                    <h3 className="text-xl font-semibold">Salut padawan</h3>
                    <p>Choisi un thème et commence</p>
                    <CourseSelector />
                </div>
            </ContentSection>
        </>
    );
}
