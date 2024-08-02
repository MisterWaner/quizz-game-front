import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
import Wrapper from "@/components/Wrapper";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
