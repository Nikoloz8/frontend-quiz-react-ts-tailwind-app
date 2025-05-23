import { useNavigate, useParams } from "react-router-dom"
import Data from "../../data.json"
import tailwind from "../shared/tailwind"
import { useState } from "react"

export default function Quiz() {
    const { QuizId } = useParams()

    type Question = {
        question: string
        options: string[]
        answer: string
    }

    type Quiz = {
        title: string
        icon: string
        questions: Question[]
    };

    const quizzes: Quiz[] = Data.quizzes;


    const quiz = quizzes.find((quiz) => quiz.title === QuizId)
    const { H5, ImageContainerDivStyle, P, H4, H3, H1 } = tailwind()


    const [questionCount, setQuestionCount] = useState<number>(0)
    const [selected, setSelected] = useState<number>(-1)
    const [scoreCount, setScoreCount] = useState<number>(0)
    const [reveal, setReveal] = useState(true)
    const [lastSelected, setLastSelected] = useState<number>(-1)
    const [chooseError, setChooseError] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleSubmit = () => {

        if (reveal) {
            if (selected === -1) {
                setChooseError(true)
                return
            }
        }

        if (!reveal) {
            setQuestionCount(questionCount + 1)
        }

        if (selected !== -1 || !reveal) {
            setReveal(!reveal)
        }


        setChooseError(false)

        setLastSelected(selected)
        setSelected(-1)


        quiz?.questions[questionCount].options[selected] === quiz?.questions[questionCount].answer ? setScoreCount(prev => {
            return prev + 1
        }
        ) : null


    }

    const correctCheck = () => {

        const currentOptions = quiz?.questions[questionCount].options
        const answer = quiz?.questions[questionCount].answer

        if (currentOptions) {
            for (let i = 0; i < currentOptions.length; i++) {
                if (currentOptions[i] === answer) {
                    return i
                }
            }
        }

        // return quiz?.questions[questionCount].options[lastSelected] === quiz?.questions[questionCount].answer
    }

    // console.log(quiz?.questions[questionCount].options)

    // console.log(!correctCheck())
    if (questionCount < 10) {
        return (
            <div className="flex flex-col w-[1200px] gap-[50px]">
                <div className="flex items-center gap-[24px]">
                    <div className={`${ImageContainerDivStyle}`} style={
                        quiz?.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz?.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz?.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz?.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
                    }>
                        <img src={`${quiz?.icon}`} alt="" />
                    </div>
                    <h5 className={`${H5}`}>
                        {quiz?.title}
                    </h5>
                </div>
                <div className="flex w-[100%] justify-between">
                    <div className="flex flex-col gap-[27px]">
                        <h6 className={`${P}`}>
                            Question {questionCount} of 10
                        </h6>
                        <p className={`${H4}`}>
                            {quiz?.questions[questionCount].question}
                        </p>
                    </div>
                    <div className="min-w-[550px] flex flex-col gap-[24px]">
                        {quiz?.questions[questionCount].options.map((question, index) => {

                            return <button onClick={() => {
                                if (reveal) {
                                    setSelected(index)
                                    setChooseError(false)
                                }
                            }} key={index} className="w-[100%] flex cursor-pointer items-center p-[18px_20px_18px_20px] active justify-between h-[92px] bg-[#FFFFFF] rounded-[24px]"

                                style={!reveal && correctCheck() === index ? { border: "3px solid #26D782" } : index === selected && reveal ? { border: "3px solid #A729F5" } : !reveal && correctCheck() !== lastSelected && lastSelected === index ? { border: "3px solid #EE5454" } : undefined}>

                                <div className="flex gap-[32px] items-center">

                                    <div className={`w-[56px] h-[56px] rounded-[8px] bg-[#F4F6FA] flex items-center justify-center ${H5}`}

                                        style={!reveal && correctCheck() === index ? { backgroundColor: "#26D782" } : index === selected && reveal ? { backgroundColor: "#A729F5", color: "#FFFFFF" } : !reveal && correctCheck() !== lastSelected && lastSelected === index ? { backgroundColor: "#EE5454", color: "#FFFFFF" } : undefined}>

                                        {index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D"}

                                    </div>

                                    <h5 className={`${H5}`}>{question}</h5>
                                </div>

                                <img src={`${correctCheck() === index ? "/images/icon-correct.svg" : "/images/icon-incorrect.svg"}`}

                                    style={!reveal && (lastSelected == index || correctCheck() === index) ? { display: "block" } : { display: "none" }} alt="" />

                            </button>
                        })}
                        <button onClick={handleSubmit}
                            className={`outline-none w-[100%] h-[92px] rounded-[24px] bg-[#A729F5] items-center flex justify-center ${H5} text-[#FFFFFF]`}>{reveal ? "Submit Answer" : "Next Question"}</button>
                        <h4 className={`${H5} text-[#EE5454] flex items-center justify-center gap-[8px]`}
                            style={chooseError ? { display: "flex" } : { display: "none" }}>
                            <img src="/images/icon-incorrect.svg" alt="" />
                            Please select an answer
                        </h4>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className="flex flex-col w-[1200px] gap-[50px]">
                <div className="flex items-center gap-[24px]">
                    <div className={`${ImageContainerDivStyle}`} style={
                        quiz?.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz?.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz?.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz?.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
                    }>
                        <img src={`${quiz?.icon}`} alt="" />
                    </div>
                    <h5 className={`${H5}`}>
                        {quiz?.title}
                    </h5>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className={`${H3}`}>Quiz completed</span>
                        <span className={`${H1} text-[6.4rem]!`}>You scored...</span>
                    </div>
                    <div className="w-[550px] flex flex-col gap-[24px]">
                        <div className="w-[100%] flex flex-col items-center justify-between h-[390px] bg-[#FFFFFF] p-[48px]! rounded-[24px]">
                            <div className="flex items-center gap-[24px]">
                                <div className={`${ImageContainerDivStyle}`} style={
                                    quiz?.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz?.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz?.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz?.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
                                }>
                                    <img src={`${quiz?.icon}`} alt="" />
                                </div>
                                <h5 className={`${H5}`}>
                                    {quiz?.title}
                                </h5>
                            </div>
                            <h1 className={`${H1} text-[14.4rem]!`}>
                                {scoreCount}
                            </h1>
                            <h5 className={`${P} text-[2.4rem] text-[#626C7F]`}>
                                out of 10
                            </h5>
                        </div>
                        <button onClick={() => navigate("/home")}
                            className={`outline-none w-[100%] h-[92px] rounded-[24px] bg-[#A729F5] items-center flex justify-center ${H5} text-[#FFFFFF]`}>Play Again</button>
                    </div>
                </div>
            </div>
        )
    }
}
