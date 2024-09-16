import LoginForm from "@/components/Forms/LoginForm";
import FormCard from "@/components/Cards/FormCard";
import ContentSection from "@/components/ContentSection";
import useRedirect from "@/hooks/useRedirect";

export default function Loggin() {
    useRedirect();
    return (
        <div className="overflow-hidden">
            <ContentSection>
                <div className="flex flex-col justify-center items-center">
                    <FormCard title="Connexion">
                        <LoginForm />
                    </FormCard>
                </div>
            </ContentSection>
        </div>
    );
}
