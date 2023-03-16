import React from "react";
import left from "../assets/Images/chevron-left.svg";

function DescriptionPhone() {
  return (
    <>
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
          <img
            src="https://www.indicereparabilite.fr/wp-content/uploads/2021/01/Wiko-View-4.png"
            alt="Descripción de la imagen"
          />
        </div>
        <div className="w-full max-w-400 h-auto max-h-300  bg-white shadow-xl">
          <div className="p-4 border-b">
            <h2 className="text-2xl ">Fiche technique</h2>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Marque</p>
              <p>Wiko</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Modèle</p>
              <p>VIEW 4 (v830)</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">RAM</p>
              <p>2GO</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Ecran</p>
              <p>4P</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Stockage</p>
              <p>16GO</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Indice Antutu</p>
              <p>120000</p>
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
                  <a href="/" className="text-purple-700 hover:underline">
                    Download
                  </a>
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
    </>
  );
}

export default DescriptionPhone;
