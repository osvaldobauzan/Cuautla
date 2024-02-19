import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./global.css";

const Recorridos = () => {
  return (
    <section>
      <div className="flex text-left m-3">
        <Link to={"/"}>
          <button className="backbutton flex text-center">
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/left.png"
              alt="left"
            />
          </button>
        </Link>{" "}
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
            Recorridos
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Les damos la bienvenida al subcomité de Recorridos
          </p>
        </div>
        <div className="grid gap-10 row-gap-10 lg:grid-cols-3 md:mt-20 sm:mt-10 ">
          <div className="max-w-md sm:mx-auto sm:text-center p-5 shadow-lg rounded-xl hover:shadow-2xl hover:duration-500">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-100 sm:mx-auto sm:w-15 sm:h-15">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency-systems-filled/48/collaborative-goal.png"
                alt="collaborative-goal"
              />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Propósito</h6>
            <p className="mb-3 text-sm text-gray-900 text-left">
              Somos los responsables de orientar a los visitantes al iniciar su
              experiencia en el evento de puertas abiertas del templo de Puebla,
              así como de los recorridos Internos dentro del templo.
            </p>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center p-5 shadow-lg rounded-xl hover:shadow-2xl hover:duration-500">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-100 sm:mx-auto sm:w-15 sm:h-15">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/computer-support.png"
                alt="computer-support"
              />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Responsabilidades
            </h6>
            <ul class="text-left max-w-md space-y-1 mb-3 text-sm text-gray-900 list-disc list-inside">
              <li>
                Orientar a los visitantes para el inicio del recorrido de
                puertas abiertas.
              </li>
              <li>
                Orientar a los visitantes hacia el inicio del recorrido del
                interior del templo.
              </li>
              <li>⁠Colocación de cubre calzado a los visitantes.</li>
              <li>⁠Recorrido en el interior del templo.</li>
              <li>Ayudar a hnos(hnas) con necesidades especiales.</li>
            </ul>
          </div>

          <div className="max-w-md sm:mx-auto sm:text-center p-5 shadow-lg rounded-xl hover:shadow-2xl hover:duration-500">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-100 sm:mx-auto sm:w-15 sm:h-15">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/rules.png"
                alt="rules"
              />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Requisitos</h6>
            <ul class="max-w-md text-left space-y-1 mb-3 text-sm text-gray-900 list-disc list-inside px-10">
              <li>Ser recomendado por su líder.</li>
              <li>Ser amable, servicial, obediente, educado y responsable.</li>
              <li>Dispuesto a cumplir horario de su turno ( 5 hrs aprox. ).</li>
              <li>Se motiva por si mismo y busca maneras de servir.</li>
              <li>No se ofende con facilidad y es lento para la ira.</li>
              <li>
                Puede servir bajo presión y manejar situaciones estresantes con
                amabilidad.
              </li>
              <li>Mostrar siempre una sonrisa.</li>
            </ul>
          </div>
        </div>
        <div className="sm:mt-10 md:mt-20 mb-4 space-x-0 md:space-x-2 md:mb-8">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=9_PMdkih7kKscDZGUlWmsiqbw7t9kotKirggV9Xm5NFUOUc5U01PT0dYWUlQMldTV0ZZQ1hPUkQ1VC4u"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-purple-700 rounded-2xl sm:w-auto sm:mb-0 "
          >
            <span className="" />
            Inscríbete
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Recorridos;
