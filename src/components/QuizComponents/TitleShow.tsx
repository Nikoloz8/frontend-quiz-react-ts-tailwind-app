type TTitleShow = {
    ImageContainerDivStyle: string,
    quiz: {
        title: string,
        icon: string,
        questions: {
            question: string
        }[],
    } | undefined,
    toggle: boolean,
    H5: string
}

export default function TitleShow({ ImageContainerDivStyle, quiz, toggle, H5 }: TTitleShow) {
    return (
        <div className="flex items-center gap-[24px]">
            <div className={`${ImageContainerDivStyle}`} style={
                quiz?.title === "HTML" ? { backgroundColor: "#FFF1E9" } : quiz?.title === "CSS" ? { backgroundColor: "#E0FDEF" } : quiz?.title === "JavaScript" ? { backgroundColor: "#EBF0FF" } : quiz?.title === "Accessibility" ? { backgroundColor: "#F6E7FF" } : undefined
            }>
                <img src={`${quiz?.icon}`} alt="" />
            </div>
            <h5 className={`${H5} max-sm:text-[1.8rem] ${toggle ? "text-[#FFFFFF]" : undefined}`}>
                {quiz?.title}
            </h5>
        </div>
    )
}
