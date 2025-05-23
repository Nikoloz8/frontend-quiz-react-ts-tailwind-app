import { useNavigate } from "react-router-dom";


type TResultsShow = {
    toggle: boolean
    ImageContainerDivStyle: string
    quiz?: {
        title: string
        icon: string
    };
    H5: string
    H1: string
    P: string
    scoreCount: number
};

export default function ResultsShow({ ImageContainerDivStyle, quiz, H5, toggle, scoreCount, H1, P}: TResultsShow) {

    const navigate = useNavigate()

    return (
        <div className="w-[550px] max-sm:w-[100%]! flex flex-col gap-[24px]">
            <div className={`w-[100%] flex flex-col items-center justify-between h-[390px] bg-[#FFFFFF] p-[48px]! rounded-[24px] ${toggle ? "bg-[#3B4D66]!" : undefined}`}>
                <div className="flex items-center gap-[24px]">
                    <div className={`${ImageContainerDivStyle}`} style={
                        quiz?.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz?.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz?.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz?.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
                    }>
                        <img src={`${quiz?.icon}`} alt="" />
                    </div>
                    <h5 className={`${H5}  max-sm:text-[1.8rem]! ${toggle ? "text-[#FFFFFF]" : undefined}`}>
                        {quiz?.title}
                    </h5>
                </div>
                <h1 className={`${H1} ${toggle ? "text-[#FFFFFF]!" : undefined} text-[14.4rem]!  max-sm:text-[8.8rem]!`}>
                    {scoreCount}
                </h1>
                <h5 className={`${P} text-[2.4rem]  max-sm:text-[1.8rem]! text-[#626C7F] ${toggle ? "text-[#ABC1E1]!" : undefined}`}>
                    out of 10
                </h5>
            </div>
            <button onClick={() => navigate("/home")}
                className={`max-sm:text-[1.8rem]! outline-none w-[100%] h-[92px] rounded-[24px] bg-[#A729F5] hover:bg-[rgba(167,41,245,0.5)]! items-center flex justify-center ${H5} text-[#FFFFFF]`}>Play Again</button>
        </div>)
}
