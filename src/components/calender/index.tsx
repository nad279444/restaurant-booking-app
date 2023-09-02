import { type FC, useState } from "react";
import ReactCalender from "react-calendar";

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}

const Calender: FC = () => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  return (
    <div>
      <ReactCalender
        minDate={new Date()}
        className="REACT-CALENDAR p-2"
        view="month"
        onClickDay={(date) => {
          console.log(date);
        }}
      />
    </div>
  );
};

export default Calender;
