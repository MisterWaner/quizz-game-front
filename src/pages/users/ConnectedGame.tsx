import ContentSection from "@/components/ContentSection";
import CourseSelector from "@/components/CourseSelector";
import useAuthToken from "@/hooks/useAuthToken";

export default function ConnectedGame() {
    const {userInfo} = useAuthToken();
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">Les jeux</h2>
            <ContentSection>
                <div className="w-full md:mx-auto">
                    <h3 className="text-xl font-semibold">Salut {userInfo?.username}</h3>
                    <p>Choisi un thème et commence</p>
                    <CourseSelector />
                </div>
            </ContentSection>
        </>
    );
}
