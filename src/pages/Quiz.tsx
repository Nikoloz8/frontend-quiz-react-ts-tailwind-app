import { useOutletContext, useParams } from "react-router-dom"
import Data from "../../data.json"
import tailwind from "../shared/tailwind"
import { useState } from "react"
import Toggle from "../components/Toggle"
import TitleLevelCount from "../components/QuizComponents/TitleLevelCount"
import Buttons from "../components/QuizComponents/QuizButtons"
import TitleShow from "../components/QuizComponents/TitleShow"
import ResultsText from "../components/QuizComponents/ResultsText"
import ResultsShow from "../components/QuizComponents/ResultsShow"

type TToggleContext = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean,
}

export default function Quiz() {
    const { toggle, setToggle } = useOutletContext<TToggleContext>()
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
            <div className="flex flex-col w-[1200px] max-xl:w-[100%]! max-xl:p-[0_100px_0_100px]! gap-[50px] max-md:p-[0]!">
                <div className="flex justify-between items-center">
                    <TitleShow ImageContainerDivStyle={ImageContainerDivStyle} quiz={quiz} toggle={toggle} H5={H5} />
                    <Toggle toggle={toggle} setToggle={setToggle} />
                </div>
                <div className="flex w-[100%] max-xl:flex-col gap-[100px] max-xl:gap-[50px]! justify-between">

                    <TitleLevelCount P={P} toggle={toggle} questionCount={questionCount} H4={H4} quiz={quiz} />

                    <Buttons P={P} toggle={toggle} questionCount={questionCount} H4={H4} quiz={quiz} reveal={reveal} setSelected={setSelected} selected={selected} lastSelected={lastSelected} correctCheck={correctCheck} H5={H5} handleSubmit={handleSubmit} chooseError={chooseError} setChooseError={setChooseError} />

                </div>
            </div >
        )
    } else {
        return (
            <div className="flex flex-col w-[1200px] max-xl:w-[100%]! gap-[50px]">
                <div className="flex justify-between items-center">
                    <TitleShow ImageContainerDivStyle={ImageContainerDivStyle} quiz={quiz} toggle={toggle} H5={H5} />
                    <Toggle toggle={toggle} setToggle={setToggle} />
                </div>
                <div className="flex max-xl:flex-col max-xl:items-center max-xl:gap-[50px]! justify-between">
                    <ResultsText toggle={toggle} H3={H3} H1={H1} />
                    <ResultsShow ImageContainerDivStyle={ImageContainerDivStyle} quiz={quiz} H5={H5} toggle={toggle} scoreCount={scoreCount} H1={H1} P={P} />
                </div>
            </div>
        )
    }
}
