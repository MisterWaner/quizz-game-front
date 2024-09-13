import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import ConnectedHeader from "@/components/Header/ConnectedHeader";
import Wrapper from "@/components/Wrapper";
import Cookies from "js-cookie";

export default function MainLayout() {
    const token = Cookies.get("token") as string;
    return (
        <>
            {token ? <ConnectedHeader /> : <Header />}
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
