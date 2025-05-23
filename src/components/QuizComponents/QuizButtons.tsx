type TButtons = {
    P: string;
    toggle: boolean;
    questionCount: number;
    H4: string;
    quiz: {
        questions: {
            question: string;
            options: string[];
        }[];
    } | undefined;
    reveal: boolean;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    setChooseError: React.Dispatch<React.SetStateAction<boolean>>;
    selected: number;
    lastSelected: number;
    correctCheck: () => number | undefined;
    H5: string;
    handleSubmit: () => void;
    chooseError: boolean;
};


export default function Buttons({ quiz, questionCount, reveal, setSelected, setChooseError, toggle, selected, lastSelected, correctCheck, H5, handleSubmit, chooseError }: TButtons) {
    return (
        <div className="min-w-[550px] max-md:min-w-[100%]! flex flex-col gap-[24px]">
            {quiz?.questions[questionCount].options.map((question, index) => {

                return <button onClick={() => {
                    if (reveal) {
                        setSelected(index)
                        setChooseError(false)
                    }
                }} key={index} className={`${toggle ? "bg-[#3B4D66]!" : undefined} w-[100%] flex cursor-pointer items-center p-[18px_20px_18px_20px] active justify-between h-[92px] bg-[#FFFFFF] rounded-[24px]`}

                    style={!reveal && correctCheck() === index ? { border: "3px solid #26D782" } : index === selected && reveal ? { border: "3px solid #A729F5" } : !reveal && correctCheck() !== lastSelected && lastSelected === index ? { border: "3px solid #EE5454" } : undefined}>

                    <div className="flex gap-[32px] items-center">

                        <div className={`w-[56px] h-[56px] rounded-[8px] bg-[#F4F6FA] flex items-center justify-center ${!reveal && correctCheck() === index ? "text-[#FFFFFF]!" : undefined} ${H5}`}

                            style={!reveal && correctCheck() === index ? { backgroundColor: "#26D782" } : index === selected && reveal ? { backgroundColor: "#A729F5", color: "#FFFFFF" } : !reveal && correctCheck() !== lastSelected && lastSelected === index ? { backgroundColor: "#EE5454", color: "#FFFFFF" } : undefined}>

                            {index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D"}

                        </div>

                        <h5 className={`${H5} ${toggle ? "text-[#FFFFFF]!" : undefined} max-sm:text-[1.8rem]!`}>{question}</h5>
                    </div>

                    <img src={`${correctCheck() === index ? "/images/icon-correct.svg" : "/images/icon-incorrect.svg"}`}

                        style={!reveal && (lastSelected == index || correctCheck() === index) ? { display: "block" } : { display: "none" }} alt="" />

                </button>
            })}
            <button onClick={handleSubmit}
                className={`outline-none w-[100%] h-[92px] rounded-[24px] bg-[#A729F5] hover:bg-[rgba(167,41,245,0.5)]! items-center flex justify-center ${H5} text-[#FFFFFF]`}>{reveal ? "Submit Answer" : "Next Question"}</button>
            <h4 className={`${H5} text-[#EE5454] flex items-center justify-center gap-[8px]`}
                style={chooseError ? { display: "flex" } : { display: "none" }}>
                <img src="/images/icon-incorrect.svg" alt="" />
                Please select an answer
            </h4>
        </div>)
}
