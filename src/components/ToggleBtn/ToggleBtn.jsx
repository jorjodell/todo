import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { toggleDaily } from "../../store/filter";

const ToggleBtn = () => {
  const isDaily = useSelector((state) => state.filter.isDaily);
  const dispatch = useDispatch();
  
  const handleChange = () => {
    dispatch(toggleDaily())
  }

  return (
    <div className="px-11">
      <label className="relative grid grid-cols-2 h-[50px] rounded-full bg-white items-center justify-items-center">
        <div className={clsx("z-10", !isDaily && "text-white")}>Mothly</div>
        <div className={clsx("z-10", isDaily && "text-white")}>Daily</div>
        <div className={clsx(
          "absolute w-1/2 bg-primary rounded-full h-full left-0 transition-transform",
          isDaily && "translate-x-full"
        )} />
        <input type="checkbox" className="sr-only" onChange={handleChange} />
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