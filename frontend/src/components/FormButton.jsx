import PropTypes from "prop-types";
import { useState } from "react";

function FormButton({ setRam, setStorage }) {
  FormButton.propTypes = {
    setRam: PropTypes.func.isRequired,
    setStorage: PropTypes.func.isRequired,
  };

  const [rambis, setRambis] = useState([
    { id: 1, seen: false },
    { id: 2, seen: false },
    { id: 3, seen: false },
    { id: 4, seen: false },
    { id: 6, seen: false },
    { id: 8, seen: false },
    { id: 12, seen: false },
    { id: 16, seen: false },
  ]);

  function handleToggleRam(id) {
    setRambis((prevRambis) => {
      const updatedRambis = prevRambis.map((r) => ({
        ...r,
        seen: r.id === id ? !r.seen : false,
      }));
      setRam(updatedRambis.find((r) => r.seen)?.id || null);
      return updatedRambis;
    });
  }

  const [storagebis, setStoragebis] = useState([
    { id: 64, seen: false },
    { id: 128, seen: false },
    { id: 256, seen: false },
    { id: 512, seen: false },
    { id: 1024, seen: false },
    { id: 2048, seen: false },
  ]);

  function handleToggleStockage(id) {
    setStorage(id);
    setStoragebis((prevStoragebis) =>
      prevStoragebis.map((s) => ({
        ...s,
        seen: s.id === id ? !s.seen : false,
      }))
    );
  }

  return (
    <div className="block">
      <p>RAM</p>
      <div className="grid gap-2 grid-cols-4">
        {rambis.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => handleToggleRam(r.id)}
            className={`h-12 w-12 border-solid border-2 border-main-light rounded-lg ${
              r.seen ? "bg-main-light text-white" : ""
            }`}
          >
            {r.id} Go
          </button>
        ))}
      </div>

      <div className="block pt-5 b-10">
        <p>Stockage</p>
        <div className="grid gap-2 grid-cols-4">
          {storagebis.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleToggleStockage(s.id)}
              className={`h-12 w-12 border-solid border-2 border-main-light rounded-lg ${
                s.seen ? "bg-main-light text-white" : ""
              }`}
            >
              {s.id} Go
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormButton;
