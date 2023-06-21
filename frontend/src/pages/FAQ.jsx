/* eslint-disable prettier/prettier */
import deco from "../assets/Images/Deco.png";
import FaqQuestions from "../components/FaqQuestions";

function FAQ() {
  const date = new Date().toLocaleDateString("fr-fr", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="m-5">
      <div className="mt-6 ml-2 font-bold text-5xl font-feli flex items-center gap-4">
        <span>F{' '}A{' '}Q</span>
        <img src={deco} alt="Descripción de la imagen" className="mb-7" />
      </div>
      <p className="ml-3 font-normal text-grey1">{date}</p>
      <FaqQuestions />
    </div>
  );
}

export default FAQ;
