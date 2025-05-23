import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";


export default function Layout() {

    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/home")
    }, [])


    return (
        <>
            <div className={`${!toggle? "bg-[url('images/pattern-background-desktop-light.svg')]" : "bg-[url('images/pattern-background-desktop-dark.svg')]"} bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh] ${!toggle? "bg-[#F4F6FA]" : "bg-[#313E51]" } flex items-center justify-center`}>
                <div className="w-[1200px] max-xl:w-[100%]! max-xl:p-[0_50px_0_50px]! max-sm:p-[0_30px_0_30px]! flex items-center justify-center">
                    <Outlet context={{ toggle, setToggle }} />
                </div>
            </div>
        </>
    )
}
