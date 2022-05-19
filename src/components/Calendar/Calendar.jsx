import clsx from 'clsx';
import dayjs from 'dayjs';
import css from './calendar.module.css'

const Calendar = () => {
  const firstDate = dayjs().date(1).weekday(1)
  const dayLen = firstDate.daysInMonth();
  const days = [];

  for(let i = 0; i < dayLen; i++) {
    days.push(firstDate.add(i, 'day'))
  }

  return (
    <div className={css.calendar}>
      <p className="text-center mb-5 text-sm font-bold">February</p>
      <div className={clsx(css.grid, "pb-3 border-b border-[#DFDFE4] mb-4")}>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
      <div className={css.grid}>
        {days.map((day) => (
          <div key={day.toString()} className={clsx(css.day, { [css.today]: day.isToday() })}>{day.format('DD')}</div>
        ))}
      </div>
    </div>
  )
}

export default Calendar;
