import Dates from "./d-picker";
import { useState } from "react";

const Page = () => {
  const [dates, setDates] = useState([]);

  const onSet = (data) => {
    setDates(data);
  };

  return (
    <>
      <Dates onSet={onSet} />
      <h1>{dates.length > 0 ? `${dates[0]}  ${dates[1]}` : ""}</h1>
    </>
  );
};

export default Page;
