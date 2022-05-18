import { useState } from "react"
import clsx from "clsx";

const ToggleBtn = () => {
  const [isDaily, setIsDaily] = useState(false);
  return (
    <div className="px-11">
      <div className="grid grid-cols-2 h-[50px] rounded-full bg-white">
        <button
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
        </button>
      </div> 
    </div>
  )
}

export default ToggleBtn