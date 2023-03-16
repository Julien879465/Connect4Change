import { useState, useEffect } from "react";

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateEnFrancais = date.toLocaleDateString("fr-FR", options);
  return (
    <div>
      <h2>{dateEnFrancais}</h2>
    </div>
  );
}

export default CurrentDate;
