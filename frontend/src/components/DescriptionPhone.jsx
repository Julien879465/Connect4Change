import React from "react";
import PropTypes from "prop-types";
import left from "../assets/Images/chevron-left.svg";

function DescriptionPhone({ brand, ram, storage, url, model, screen, indice }) {
  return (
    <div>
      <div>
        <a
          href="/PhonePage"
          className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-main bg-white hover:underline"
        >
          <img src={left} alt="" />
          Previous
        </a>
      </div>
      <div className="min-h-screen flex items-center justify-center px-4  bg-white rounded-lg shadow-2xl mb-8">
        <div className="w-400 h-300">
          <img src={url} alt="phone" />
        </div>
        <div className="w-full max-w-400 h-auto max-h-300  bg-white shadow-xl">
          <div className="p-4 border-b">
            <h2 className="text-2xl ">Fiche technique</h2>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Marque</p>
              <p>{brand}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Modèle</p>
              <p>{model}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">RAM</p>
              <p>{ram}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Ecran</p>
              <p>{screen}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Stockage</p>
              <p>{storage}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Indice Antutu</p>
              <p>{indice}</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
              <p className="text-gray-600">Attachments</p>
              <div className="space-y-2">
                <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                  <div className="space-x-2 truncate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current inline text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                    </svg>
                    <span>fiche_technique.pdf</span>
                  </div>

                  <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                    <div className="space-x-2 truncate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current inline text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                      </svg>
                      <span>categorisation.pdf</span>
                    </div>
                    <a href="/" className="text-purple-700 hover:underline">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DescriptionPhone.propTypes = {
  brand: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  storage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  indice: PropTypes.string.isRequired,
};

export default DescriptionPhone;
