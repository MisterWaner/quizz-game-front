import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import ConnectedHeader from "@/components/Header/ConnectedHeader";
import Wrapper from "@/components/Wrapper";
import useAuthToken from "@/hooks/useAuthToken";

export default function MainLayout() {
    const { token } = useAuthToken();
    return (
        <>
            {token ? <ConnectedHeader /> : <Header />}
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
