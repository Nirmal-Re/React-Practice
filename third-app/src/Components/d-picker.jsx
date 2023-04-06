import { DatePicker } from "antd";
import dayjs from "dayjs";

const Dates = (onSet) => {
  const disabledDate = (current) => {
    return current && current > dayjs().endOf("day");
  };

  const rangePresets = [
    {
      label: "Last 7 Days",
      value: [dayjs().add(-7, "d"), dayjs()],
    },
    {
      label: "Last 14 Days",
      value: [dayjs().add(-14, "d"), dayjs()],
    },
    {
      label: "Last 30 Days",
      value: [dayjs().add(-30, "d"), dayjs()],
    },
    {
      label: "Last 90 Days",
      value: [dayjs().add(-90, "d"), dayjs()],
    },
  ];

  const dateChanges = (dates, dateString) => {
    onSet.onSet(dateString);
  };

  return (
    <DatePicker.RangePicker
      presets={rangePresets}
      style={{ margin: "50px" }}
      disabledDate={disabledDate}
      onChange={dateChanges}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: dayjs("00:00:00", "HH:mm:ss"),
      }}
    ></DatePicker.RangePicker>
  );
};

export default Dates;
