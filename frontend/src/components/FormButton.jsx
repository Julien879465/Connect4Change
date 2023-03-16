import React, { useState } from "react";

function FormButton() {
  const [ram, setRam] = useState([
    { id: 1, seen: false },
    { id: 2, seen: false },
    { id: 3, seen: false },
    { id: 4, seen: false },
    { id: 6, seen: false },
    { id: 8, seen: false },
    { id: 12, seen: false },
    { id: 16, seen: false },
  ]);
  const [stockage, setStockage] = useState([
    { id: 64, seen: false },
    { id: 128, seen: false },
    { id: 256, seen: false },
    { id: 512, seen: false },
    { id: 1024, seen: false },
    { id: 2048, seen: false },
  ]);

  function handleToggleRam(id, nextSeen) {
    setRam(
      ram.map((r) => {
        if (r.id === id) {
          return { ...r, seen: nextSeen };
        } else {
          return r;
        }
      })
    );
  }

  function handleToggleStockage(id, nextSeen) {
    setStockage(
      stockage.map((s) => {
        if (s.id === id) {
          return { ...s, seen: nextSeen };
        } else {
          return s;
        }
      })
    );
  }

  return (
    <div className="block">
      <p>RAM</p>
      <div className=" grid gap-2 grid-cols-4">
        {ram.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => handleToggleRam(r.id, !r.seen)}
            className={`h-12 w-12 border-solid border-2 border-main rounded-lg ${
              r.seen ? "bg-main text-white" : "active:none"
            }`}
          >
            {r.id} Go
          </button>
        ))}
      </div>

      <div className="block pt-5 pb-10">
        <p>Stockage</p>
        <div className=" grid gap-2 grid-cols-4">
          {stockage.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleToggleStockage(s.id, !s.seen)}
              className={`h-12 w-12 border-solid border-2 border-main rounded-lg ${
                s.seen ? "bg-main text-white" : "active:none"
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
