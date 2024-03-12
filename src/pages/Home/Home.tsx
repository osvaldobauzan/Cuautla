"use client";

import React from "react";
import { useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  stagger,
  useAnimate,
} from "framer-motion";
import { cn } from "./cn";
import { Link } from "react-router-dom";
import "./home.css";

import Footer from "../../components/Footer";

const Home = ({
  words,
  className,
  img,
}: {
  words: string;
  className?: string;
  img?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const wordClass =
            word === "Cuautla"
              ? // || word === "Puebla"
                "w-full md:text-7xl text-6xl py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-500 to-violet-600 lg:inline"
              : "text-black";
          return (
            <motion.span
              key={word + idx}
              className={`dark:text-white ${wordClass} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <section className="flex flex-col justify-center max-w-7xl w-full">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="py-14 px-12 mx-auto max-w-7xl ">
        <div className="w-full mx-auto md:w-11/12 xl:w-11/12 md:text-center justify-center text-center">
          <div className={cn("font-bold", className)}>
            <div className="mt-4">
              <div className="block w-full md:text-7xl text-6xl py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-300 to-violet-900 lg:inline">
                {renderWords()}
              </div>
            </div>
          </div>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Gracias por tu interés en servir como voluntario en las puertas
            abiertas del templo de la ciudad de Puebla. Incríbete aquí
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.8, rotate: -10 }}
              target="_blank"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=9_PMdkih7kKscDZGUlWmsiqbw7t9kotKirggV9Xm5NFUOUc5U01PT0dYWUlQMldTV0ZZQ1hPUkQ1VC4u"
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
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="flex items-center flex-none px-4 bg-purple-300 rounded-b-none h-11 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <img className="w-full rounded-b-lg" src={img} />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="">
        <div className="container md:px-6 py-10 mx-auto">
          <h1 className="py-10 text-5xl font-bold text-gray-900">
            Comités y Requisitos
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 md:px-12 px-0 ">
            <Link to={"/tecnologia"}>
              <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500 ">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/workstation.png"
                    alt="workstation"
                  />
                </span>

                <Link to={"/tecnologia"}>
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    Tecnología
                  </h1>
                </Link>
                <p className="text-gray-500 text-left">
                  Somos los responsables de atender a los visitantes en la
                  primera estación del recorrido de puertas abiertas del templo
                  de Puebla, para ayudarles a reconocer el propósito de estos en
                  la Iglesia de Jesucristo de los Santos de los Últimos Días.
                </p>

                <Link to={"/tecnologia"}>
                  <a className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 ">
                    <span className="mx-1">Leer más</span>
                    <svg
                      className="w-4 h-4 mx-1 rtl:-scale-x-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </Link>

            <Link to={"/seguridad"}>
              <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/lock-2.png"
                    alt="lock-2"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Protección y Seguridad
                </h1>

                <p className="text-gray-500 text-left">
                  Cuidar y proteger la Integridad Física (Salud) y Material
                  (Bienes) de todos los participantes al Evento con la ayuda de
                  25 hermanas y/o hermanos bien dispuestos
                </p>

                <a
                  href="#"
                  className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 "
                >
                  <span className="mx-1">Leer más</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </Link>

            <Link to={"/estacionamiento"}>
              <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/bus.png"
                    alt="bus"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Estacionamiento
                </h1>

                <p className="text-gray-500 text-left">
                  Coordinar el estacionamiento para invitados, voluntarios y
                  miembros en general que asistan a cada uno de los eventos.
                  También se organiza con el subcomité de seguridad para la
                  disposición de los vehículos de los oficiales de la Iglesia
                  durante los eventos de la dedicación (en caso de ser
                  necesario)
                </p>

                <a
                  href="#"
                  className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 "
                >
                  <span className="mx-1">Leer más</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </Link>

            <Link to={"/recorridos"}>
              <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/walking.png"
                    alt="walking"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Recorridos
                </h1>

                <p className="text-gray-500 text-left">
                  Somos los responsables de orientar a los visitantes al iniciar
                  su experiencia en el evento de puertas abiertas del templo de
                  Puebla, así como de los recorridos Internos dentro del templo.
                  Este es el comité ideal si eres un hombre o mujer jóven
                  queriendo pariticipar
                </p>

                <a
                  href="#"
                  className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 "
                >
                  <span className="mx-1">Leer más</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </Link>

            <Link to={"/traduccion"}>
              <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/translate-app.png"
                    alt="translate-app"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Traducción
                </h1>

                <p className="text-gray-500 text-left">
                  Nuestra responsabilidad es la de ofrecer el apoyo con la
                  atención en los idiomas, inglés, alemán y lenguaje de señas,
                  durante el recorrido completo de puertas abiertas con fechas y
                  horarios específicos. Establecer guardias durante los
                  distintos turnos, por si fuera necesario dar esa atención en
                  recorridos fuera de los designados.
                </p>

                <a
                  href="#"
                  className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 "
                >
                  <span className="mx-1">Leer más</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </Link>

            <Link to={"/facilidades"}>
              <div className="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl hover:duration-500">
                <span className="inline-block p-3 text-purple-500 bg-purple-200 rounded-full ">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/wheelchair.png"
                    alt="wheelchair"
                  />
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Facilidades Físicas
                </h1>

                <p className="text-gray-500 text-left">
                  Suministrar todo aquello que facilite el desarrollo de las
                  actividades y los eventos de puertas abiertas y dedicación del
                  templo de Puebla, mantener todas las áreas del templo en orden
                  y limpieza para que cada visitante pueda sentir un espíritu de
                  reverencia y santidad de este sagrado lugar.
                </p>

                <a
                  href="#"
                  className="flex items-center -mx-1 text-sm text-gray-700 capitalize transition-colors duration-300 transform  hover:underline hover:text-blue-600 "
                >
                  <span className="mx-1">Leer más</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-10 space-x-0 md:space-x-2">
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: -10 }}
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=9_PMdkih7kKscDZGUlWmsiqbw7t9kotKirggV9Xm5NFUOUc5U01PT0dYWUlQMldTV0ZZQ1hPUkQ1VC4u"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-purple-700 rounded-2xl sm:w-auto sm:mb-0 "
        >
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
      {/* CALENDAR SECTION  */}

      <h2 className="pt-28 text-5xl font-bold text-gray-900">Calendario</h2>

      <section className="container mx-auto md:p-6 sm:p-2 ">
        <div className="container mx-auto p-4 space-y-2 text-left">
          <h2 className="text-3xl font-bold pt-10 ">Ultima semana de Marzo:</h2>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <thead className="">
                <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
                  <th className="px-4 py-3 text-center">Turno</th>
                  <th className="px-4 py-3 text-center">Lunes 25</th>
                  <th className="px-4 py-3 text-center">Martes 26</th>
                  <th className="px-4 py-3 text-center">Miércoles 27</th>
                  <th className="px-4 py-3 text-center">Jueves 28</th>
                  <th className="px-4 py-3 text-center">Viernes 29</th>
                  <th className="px-4 py-3 text-center">Sábado 30</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">08:00 12:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs">LA PAZ</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN SUR</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">12:00 16:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs">
                    CHOLULA / CUAUTLA ZAPATA
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    CITLATEPETL / LA LIBERTAD
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">16:00 20:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs"></td>
                  <td className="px-4 py-3 border text-xs">ANGELOPOLIS</td>
                  <td className="px-4 py-3 border text-xs">ARBOLEDAS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto md:p-6 sm:p-2 ">
        <div className="container mx-auto p-4 space-y-2 text-left">
          <h2 className="text-3xl font-bold ">Primer semana de Abril:</h2>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <thead className="">
                <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
                  <th className="px-4 py-3 text-center">Turno</th>
                  <th className="px-4 py-3 text-center">Lunes 1</th>
                  <th className="px-4 py-3 text-center">Martes 2</th>
                  <th className="px-4 py-3 text-center">Miércoles 3</th>
                  <th className="px-4 py-3 text-center">Jueves 4</th>
                  <th className="px-4 py-3 text-center">Viernes 5</th>
                  <th className="px-4 py-3 text-center">Sábado 6</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">08:00 12:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">AMALUCAN</td>
                  <td className="px-4 py-3 border text-xs">LA LIBERTAD</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN MEX</td>
                  <td className="px-4 py-3 border text-xs">ARBOLEDAS</td>
                  <td className="px-4 py-3 border text-xs"></td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">12:00 16:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    TEZIUTLÁN / TLAXCALA MEX
                  </td>
                  <td className="px-4 py-3 border text-xs">TLAXCALA NTE</td>
                  <td className="px-4 py-3 border text-xs">
                    TEHUACAN / ANGELOPOLIS
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    DTO. IZUCAR / LA PAZ
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    DTO. I. MEJIA / OMETOXTLA
                  </td>
                  <td className="px-4 py-3 border text-xs"></td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">16:00 20:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">ATLIXCO</td>
                  <td className="px-4 py-3 border text-xs">FUERTES</td>
                  <td className="px-4 py-3 border text-xs">CHOLULA</td>
                  <td className="px-4 py-3 border text-xs">VALSEQUILLO</td>
                  <td className="px-4 py-3 border text-xs">TLAXCALA MEX</td>
                  <td className="px-4 py-3 border text-xs"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto md:p-6 sm:p-2">
        <div className="container mx-auto p-4 space-y-2 text-left">
          <h2 className="text-3xl font-bold">Segunda semana de Abril:</h2>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <thead className="">
                <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
                  <th className="px-4 py-3 text-center">Turno</th>
                  <th className="px-4 py-3 text-center">Lunes 8</th>
                  <th className="px-4 py-3 text-center">Martes 9</th>
                  <th className="px-4 py-3 text-center">Miércoles 10</th>
                  <th className="px-4 py-3 text-center">Jueves 11</th>
                  <th className="px-4 py-3 text-center">Viernes 12</th>
                  <th className="px-4 py-3 text-center">Sábado 13</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">08:00 12:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">CHOLULA</td>
                  <td className="px-4 py-3 border text-xs">AMALUCAN</td>
                  <td className="px-4 py-3 border text-xs">FUERTES</td>
                  <td className="px-4 py-3 border text-xs">ANGELOPOLIS</td>
                  <td className="px-4 py-3 border text-xs">VALSEQUILLO</td>
                  <td className="px-4 py-3 border text-xs">
                    OMETOXTLA / CUAUTLA PALMAS
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">12:00 16:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN MEX</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN SUR</td>
                  <td className="px-4 py-3 border text-xs">
                    DTO. IZUCAR / ARBOLEDAS
                  </td>
                  <td className="px-4 py-3 border text-xs">TLAXCALA MEX</td>
                  <td className="px-4 py-3 border text-xs">ATLIXCO</td>
                  <td className="px-4 py-3 border text-xs">
                    DTO. I. MEJIA / AMALUCAN
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">16:00 20:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
                  <td className="px-4 py-3 border text-xs">OMETOXTLA</td>
                  <td className="px-4 py-3 border text-xs">LA PAZ</td>
                  <td className="px-4 py-3 border text-xs">LA LIBERTAD</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN MEX</td>
                  <td className="px-4 py-3 border text-xs">TLAXCALA NTE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto md:p-6 sm:p-2">
        <div className="container mx-auto p-4 space-y-2 text-left">
          <h2 className="text-3xl font-bold">Tercera semana de Abril:</h2>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <thead className="">
                <tr className="text-xs font-medium tracking-wide text-left text-gray-900 bg-purple-200 uppercase border-b border-gray-600">
                  <th className="px-4 py-3 text-center">Turno</th>
                  <th className="px-4 py-3 text-center">Lunes 15</th>
                  <th className="px-4 py-3 text-center">Martes 16</th>
                  <th className="px-4 py-3 text-center">Miércoles 17</th>
                  <th className="px-4 py-3 text-center">Jueves 18</th>
                  <th className="px-4 py-3 text-center">Viernes 19</th>
                  <th className="px-4 py-3 text-center">Sábado 20</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">08:00 12:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">TLAXCALA NTE</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN MEX</td>
                  <td className="px-4 py-3 border text-xs">TLAXCALA MEX</td>
                  <td className="px-4 py-3 border text-xs">OMETOXTLA</td>
                  <td className="px-4 py-3 border text-xs">FUERTES</td>
                  <td className="px-4 py-3 border text-xs">
                    ATLIXCO / CUAUTLA MEXICO
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">12:00 16:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    CITLATEPETL / FUERTES
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    TEZIUTLÁN / ATLIXCO
                  </td>
                  <td className="px-4 py-3 border text-xs">LA LIBERTAD</td>
                  <td className="px-4 py-3 border text-xs">ARBOLEDAS</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN NTE</td>
                  <td className="px-4 py-3 border text-xs">
                    TEHUACAN / VALSEQUILLO
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-xs text-gray-600">16:00 20:00</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">VALSEQUILLO</td>
                  <td className="px-4 py-3 border text-xs">CHOLULA</td>
                  <td className="px-4 py-3 border text-xs">ANGELOPOLIS</td>
                  <td className="px-4 py-3 border text-xs">AMALUCAN</td>
                  <td className="px-4 py-3 border text-xs">NEALTICAN SUR</td>
                  <td className="px-4 py-3 border text-xs">LA PAZ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="mt-10 space-x-0 md:space-x-2">
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: -10 }}
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=9_PMdkih7kKscDZGUlWmsiqbw7t9kotKirggV9Xm5NFUOUc5U01PT0dYWUlQMldTV0ZZQ1hPUkQ1VC4u"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 mb-2 text-lg text-white bg-purple-700 rounded-2xl sm:w-auto sm:mb-0 "
        >
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

      {/* HUVASDCBHIC */}

      <section className="container mx-auto md:p-6 sm:p-2 ">
        <div className="container mx-auto p-4 space-y-2 text-left">
          <h2 className="text-3xl font-bold pt-10 ">Fechas de capacitación:</h2>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-black text-left">
                          Estacas del Consejo Puebla Norte y Estaca Teziutlán:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    DOMINGO 25 de febrero a las 5 de la tarde en cada Centro de
                    Estaca/Distrito.
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-black text-left">
                          Estacas del Consejo Puebla Sur:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    DOMINGO 03 de marzo a las 5 de la tarde en cada centro de
                    Estaca/Distrito.
                  </td>
                </tr>
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="text-black text-left">
                          Estacas de Cuautla, Morelos:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    DOMINGO 10 de marzo a las 5 de la tarde en cada centro de
                    Estaca/Distrito.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Home;
