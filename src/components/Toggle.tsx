type TToggle = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Toggle({ toggle, setToggle }: TToggle) {
    return (
        <div className="flex items-center justify-end gap-[16px] w-[100%]">
            <img src={toggle? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"} alt="" />
            <label onClick={() => setToggle(!toggle)} className="w-[48px] h-[28px] p-[4px]! flex items-center rounded-[999px] bg-[#A729F5]">
                <span style={toggle ? { transform: "translateX(100%)", transition: "0.5s" } : { transition: "0.5s" }} className="w-[20px] block h-[20px] rounded-[100%] bg-[#FFFFFF]"></span>
            </label>
            <img src={toggle? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"} alt="" />
        </div>
    )
}
