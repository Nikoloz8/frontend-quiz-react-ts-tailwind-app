type TTitleLevelCount = {
    P: string,
    toggle: boolean,
    questionCount: number,
    H4: string,
    quiz: {
        questions: {
            question: string
        }[],
    } | undefined
}

export default function TitleLevelCount({ P, toggle, questionCount, H4, quiz }: TTitleLevelCount) {
    return (
        <div className="flex flex-col justify-between max-xl:pb-[0]! max-xl:gap-[50px]! pb-[80px]!">
            <div className="flex gap-[27px] flex-col">
                <h6 className={`${P} max-sm:text-[1.4rem]! ${toggle ? "text-[#ABC1E1]" : undefined}`}>
                    Question {questionCount} of 10
                </h6>
                <p className={`${H4} max-sm:text-[2rem]! ${toggle ? "text-[#FFFFFF]" : undefined}`}>
                    {quiz?.questions[questionCount].question}
                </p>
            </div>
            <div className="w-[100%] h-[16px] p-[4px]! bg-[#FFFFFF] rounded-[999px]">
                <div className={`h-[100%] bg-[#A729F5] rounded-[999px]!`}
                    style={{ width: `${questionCount * 10}%`, transition: "1s" }}>

                </div>
            </div>
        </div>)
}
