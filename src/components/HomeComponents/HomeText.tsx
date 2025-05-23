type THomeText = {
    H3:string,
    toggle:boolean,
    H1:string,
    P:string
}

export default function HomeText({H3, toggle, H1, P}:THomeText) {
    return (
        <div className="gap-[20px] flex flex-col">
            <h1 className="flex flex-col">
                <span className={`${H3} max-sm:text-[4rem]! ${toggle ? "text-[#FFFFFF]" : undefined}`}>Welcome to the</span>
                <span className={`${H1} text-[6.4rem]! max-sm:text-[4rem]! ${toggle ? "text-[#FFFFFF]" : undefined}`}>Frontend Quiz!</span>
            </h1>
            <h2 className={`${P} text-[2rem]! max-sm:text-[1.4rem]! ${toggle ? "text-[#ABC1E1]" : undefined} text-[#626C7F]`}>
                <i>
                    Pick a subject to get started.
                </i>
            </h2>
        </div>
    )
}
