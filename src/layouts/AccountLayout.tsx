import ConnectedHeader from "@/components/Header/ConnectedHeader";
import { Outlet } from "react-router-dom";
import PrivateRoute from "@/routes/PrivateRoutes";
import Wrapper from "@/components/Wrapper";

export default function AccountLayout() {
    return (
        <PrivateRoute>
            <ConnectedHeader />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </PrivateRoute>
    );
}
