import { useState } from "react"
import clsx from "clsx";

const ToggleBtn = () => {
  const [isDaily, setIsDaily] = useState(false);

  return (
    <div className="px-11">
      <label className="relative grid grid-cols-2 h-[50px] rounded-full bg-white items-center justify-items-center">
        <div className={clsx("z-10", !isDaily && "text-white")}>Mothly</div>
        <div className={clsx("z-10", isDaily && "text-white")}>Daily</div>
        <div className={clsx(
          "absolute w-1/2 bg-primary rounded-full h-full left-0 transition-transform",
          isDaily && "translate-x-full"
        )} />
        <input type="checkbox" className="sr-only" onChange={(e) => setIsDaily(e.target.checked)} />
        {/* <button
          className={clsx(
            "h-full",
            !isDaily && "bg-primary text-white rounded-full"
          )}
          onClick={() => setIsDaily(false)}
        >
          Mothly
        </button>
        <button className={clsx(
            "h-full",
            isDaily && "bg-primary text-white rounded-full"
          )}
          onClick={() => setIsDaily(true)}
        >
          Daily
        </button> */}
      </label> 
    </div>
  )
}

export default ToggleBtn