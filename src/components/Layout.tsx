import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {


    const navigate = useNavigate()

    useEffect(() => {
        navigate("/home")
    }, [])

    return (
        <div className="bg-[url('images/pattern-background-desktop-light.svg')] bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] bg-[#F4F6FA] flex items-center justify-center">
            <div className="w-[1200px] flex items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
}
