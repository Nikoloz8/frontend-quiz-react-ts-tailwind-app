type TResultsText = {
    toggle:boolean,
    H3: string,
    H1: string
}

export default function ResultsText({toggle, H3, H1}:TResultsText) {
    return (
        <div className="flex flex-col">
            <span className={`${H3} max-sm:text-[4rem]! ${toggle ? "text-[#FFFFFF]" : undefined}`}>Quiz completed</span>
            <span className={`${H1} max-sm:text-[4rem]! text-[6.4rem]! ${toggle ? "text-[#FFFFFF]" : undefined}`}>You scored...</span>
        </div>)
}
