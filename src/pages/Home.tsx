import tailwind from "../shared/tailwind"
import Data from "../../data.json"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const { H3, H1, P, H5, ChooseButtonStyle, ImageContainerDivStyle } = tailwind()
    const quizzes: { title: string, icon: string }[] = Data.quizzes
    const navigate = useNavigate()
    return (
        <div className="flex justify-between w-[100%]">
            <div className="gap-[20px] flex flex-col">
                <h1 className="flex flex-col">
                    <span className={`${H3}`}>Welcome to the</span>
                    <span className={`${H1} text-[6.4rem]!`}>Frontend Quiz!</span>
                </h1>
                <h2 className={`${P} text-[2rem]! text-[#626C7F]`}>
                    <i>
                        Pick a subject to get started.
                    </i>
                </h2>
            </div>
            <div className="w-[550px] flex flex-col gap-[24px]">
                {quizzes.map((quiz, index) => {
                    return <button key={index} onClick={() => {
                        navigate(`/${quiz.title}`)
                    }} className={`${H5} ${ChooseButtonStyle}`}>
                        <div className={`${ImageContainerDivStyle}`} style={
                            quiz.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
                        }>
                            <img src={`${quiz.icon}`} alt="" />
                        </div>
                        {quiz.title}
                    </button>
                })}
            </div>
        </div>
    )
}
