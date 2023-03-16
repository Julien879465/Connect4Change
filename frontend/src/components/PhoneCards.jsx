import React from "react";
import PropTypes from "prop-types";

function PhoneCards({ brand, ram, storage, url, network, model }) {
  return (
    <div className="shadow p-4 rounded-lg bg-white">
      <a
        href="/OnePhone"
        className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
      >
        <div className="flex justify-center relative rounded-lg overflow-hidden h-90">
          <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <img src={url} alt="Descripción de la imagen" />
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>

          <div className="absolute flex justify-center bottom-0 mb-3">
            <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
              <p className="flex items-center font-medium text-gray-800">
                {network}
              </p>

              <p className="flex items-center font-medium text-gray-800">GPS</p>

              <p className="flex items-center font-medium text-gray-800">LCD</p>
            </div>
          </div>

          <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green text-sm font-medium text-white select-none">
            Disponible
          </span>
        </div>

        <div className="text-center block mt-4">
          <h2
            className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
            title="New York"
          >
            {brand} {model}
          </h2>
          <p
            className="mt-2 text-sm text-cyan-500 line-clamp-1"
            title="New York, NY 10004, United States"
          >
            INDICE DE RÉPARABILITÉ SMARTPHONE
          </p>
        </div>

        <div className="mt-8">
          <p className="block text-gray-800">
            <span className="block mt-2 xl:mt-0">RAM: {ram}</span>
          </p>
          <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span className="block mt-2 xl:mt-0">Stockage: {storage}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="flex items-center">
            <button
              type="button"
              className="text-white bg-main hover:bg-main-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-2 text-center inline-flex items-center "
            >
              Voir plus
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-end">
            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
              <span className="text-sm uppercase">$</span>
              <span className="text-lg">79</span>€
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

PhoneCards.propTypes = {
  brand: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  network: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default PhoneCards;
