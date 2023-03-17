import PropTypes from "prop-types";

function FormButton({ setRam, setStorage }) {
  FormButton.propTypes = {
    setRam: PropTypes.func.isRequired,
    setStorage: PropTypes.func.isRequired,
  };
  // const { setRam, setStorage } = useCurrentPhoneContext();

  const rambis = [
    { id: 1, seen: false },
    { id: 2, seen: false },
    { id: 3, seen: false },
    { id: 4, seen: false },
    { id: 6, seen: false },
    { id: 8, seen: false },
    { id: 12, seen: false },
    { id: 16, seen: false },
  ];
  function handleToggleRam(id, nextSeen) {
    setRam(rambis.filter((r) => r.id === id)[0].id);
    rambis.map((r) => {
      if (r.id === id) {
        return { ...r, seen: nextSeen };
      }
      return r;
    });
  }

  // function handleToggleRam(id, nextSeen) {
  //   setRam(
  //   rambis.map((r) => {
  //     if (r.id === id) {
  //       return { ...r, seen: nextSeen };
  //     }
  //     return [];
  //   })
  // );
  // }

  const storagebis = [
    { id: 64, seen: false },
    { id: 128, seen: false },
    { id: 256, seen: false },
    { id: 512, seen: false },
    { id: 1024, seen: false },
    { id: 2048, seen: false },
  ];

  function handleToggleStockage(id, nextSeen) {
    setStorage(storagebis.filter((s) => s.id === id)[0].id);
    storagebis.map((s) => {
      if (s.id === id) {
        return { ...s, seen: nextSeen };
      }
      return s;
    });
  }

  return (
    <div className="block">
      <p>RAM</p>
      <div className=" grid gap-2 grid-cols-4">
        {rambis.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => handleToggleRam(r.id, !r.seen)}
            className={`h-12 w-12 border-solid border-2 border-main-light rounded-lg ${
              r.seen ? "bg-main-light text-white" : "active:none"
            }`}
          >
            {r.id} Go
          </button>
        ))}
      </div>

      <div className="block pt-5 b-10">
        <p>Stockage</p>
        <div className=" grid gap-2 grid-cols-4">
          {storagebis.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleToggleStockage(s.id, !s.seen)}
              className={`h-12 w-12 border-solid border-2 border-main-light rounded-lg ${
                s.seen ? "bg-main-light text-white" : "active:none"
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
