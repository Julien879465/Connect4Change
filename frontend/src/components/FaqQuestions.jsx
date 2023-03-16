import React from "react";
import questions from "../assets/Images/questions.png";

function FaqQuestions() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="w-1/3 mx-auto">
          <img src={questions} alt="Descripción de la imagen" />
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Question fréquemment posée
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Les questions les plus courantes sur le fonctionnement de notre
              entreprise et ce que peut faire pour vous.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Comment puis-je entrer un téléphone pour être classifié?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  Comment fonctionne le système emmaüs connect?
                </summary>

                <span>
                  Dans notre magasin de téléphones portables d'occasion, nous
                  sommes heureux de vous informer que les téléphones que nous
                  avons révélés ont été donnés et ont été dûment évalués et
                  catégorisés pour garantir leur qualité et leurs performances.
                  Pour catégoriser chaque téléphone, nous utilisons une
                  calculatrice et évaluons plusieurs facteurs importants tels
                  que la marque, le modèle, la quantité de RAM, la capacité de
                  stockage, l'indice Antutu et la capacité de réseau. De cette
                  manière, nous pouvons vous offrir des téléphones qui répondent
                  à tous les besoins.
                </span>
              </details>
              <details className="mb-4">
                <summary className="mb-4 font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Puis-je saisir un fichier en csv ?
                </summary>

                <span>
                  Bien sûr! En plus de saisir manuellement les informations de
                  chaque téléphone dans la calculatrice virtuelle et de générer
                  un code QR pour chacun, il est également possible de
                  télécharger les informations du téléphone au format CSV et de
                  les saisir automatiquement dans la base de données. Ceci est
                  particulièrement utile si vous avez un grand nombre de
                  téléphones que vous devez classer et que vous ne souhaitez pas
                  les saisir manuellement un par un.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Puis-je saisir un fichier en csv ?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Puis-je saisir un fichier en csv ?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Puis-je saisir un fichier en csv ?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqQuestions;
