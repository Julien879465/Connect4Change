/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import deco from "../assets/Images/Deco.png";
import FaqQuestions from "../components/FaqQuestions";

function FAQ() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  const formattedTime = date
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .replace(":", "h");

  return (
    <div className="m-5">
      <div className="mt-6 ml-2 font-bold text-5xl font-feli flex items-center gap-4">
        <span>F{' '}A{' '}Q</span>
        <img src={deco} alt="Descripción de la imagen" className="mb-7" />
      </div>
      <div className="pl-2 text-grey2 text-xs mb-8">
        {date.toLocaleDateString()} {formattedTime}
      </div>
      <FaqQuestions />
    </div>
  );
}

export default FAQ;
