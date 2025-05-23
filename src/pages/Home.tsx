import tailwind from "../shared/tailwind"
import Data from "../../data.json"
import { useOutletContext } from "react-router-dom"
import Toggle from "../components/Toggle"
import HomeText from "../components/HomeComponents/HomeText"
import HomeButtons from "../components/HomeComponents/HomeButtons"

type TToggleContext = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean,
}

export default function Home() {
    const { toggle, setToggle } = useOutletContext<TToggleContext>()

    const { H3, H1, P, H5, ChooseButtonStyle, ImageContainerDivStyle } = tailwind()
    const quizzes: { title: string, icon: string }[] = Data.quizzes
    return (
        <>
            <div className="flex flex-col gap-[150px] max-xl:gap-[50px]! w-[100%] max-xl:items-center">
                <Toggle toggle={toggle} setToggle={setToggle} />
                <div className="flex justify-between max-xl:flex-col max-sm:w-[100%] max-xl:gap-[50px]">
                    <HomeText H3={H3} toggle={toggle} H1={H1} P={P} />
                    <HomeButtons quizzes={quizzes} ChooseButtonStyle={ChooseButtonStyle} toggle={toggle} ImageContainerDivStyle={ImageContainerDivStyle} H5={H5}/>
                </div>
            </div>
        </>
    )
}


