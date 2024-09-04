import ContentSection from "@/components/ContentSection";
import FormCard from "@/components/Cards/FormCard";
import SignUpForm from "@/components/Forms/SignUpForm";

export default function Register() {
    return (
        <div className="overflow-hidden">
            <ContentSection>
                <div className="flex flex-col justify-center items-center">
                    <FormCard title="Créer ton compte">
                        <SignUpForm />
                    </FormCard>
                </div>
            </ContentSection>
        </div>
    );
}
