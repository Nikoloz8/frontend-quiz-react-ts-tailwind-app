import { useNavigate } from "react-router-dom"

type THomeButtons = {
  quizzes: {
    title: string;
    icon: string;
  }[];
  ChooseButtonStyle: string;
  toggle: boolean;
  ImageContainerDivStyle: string;
  H5: string;
};

export default function HomeButtons({ quizzes, ChooseButtonStyle, toggle, ImageContainerDivStyle, H5}:THomeButtons) {

    const navigate = useNavigate()

    return (
        <div className="w-[550px] max-sm:w-[100%]! flex flex-col gap-[24px]">
            {quizzes.map((quiz, index) => {
                return <button key={index} onClick={() => {
                    navigate(`/${quiz.title}`)
                }} className={`${H5} max-sm:text-[1.8rem]! ${ChooseButtonStyle}  ${toggle ? "text-[#FFFFFF] bg-[#3B4D66]!" : undefined}`}>
                    <div className={`${ImageContainerDivStyle}`} style={
                        quiz.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
                    }>
                        <img src={`${quiz.icon}`} alt="" />
                    </div>
                    {quiz.title}
                </button>
            })}
        </div>)
}
