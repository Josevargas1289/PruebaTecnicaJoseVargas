import React from "react";
import { useNavigate } from "react-router-dom";

const Vista2 = () => {

    const navigate = useNavigate();

    const goHome = ()=>{
        navigate('/')
    }
  return (
    <div className=" flex-col ">
      <header className=" w-100% p-10 mr20 bg-indigo-600 shadow-2xl shadow-slate-400  ">
        <h1 className=" uppercase ml-20  font-black text-2xl text-indigo-100  ">
          Histórico Consumos por Cliente
        </h1>
        <div className=" flex">
          <p className="ml-20 mt-4 font-semibold text-indigo-50 flex-auto w-1/2">
          Este modulo genera un historico por cada tipo de usuario, que contenga el tramo, consumo, perdidas y costo por el consumo. Esto permite ver cual tramo genera mayores pérdidas para tomar decisiones.
          </p>
          <i onClick={goHome} className="bx bxs-door-open bx-lg bx-fade-left-hover flex-1 mt-5 ml-32 text-indigo-100 cursor-pointer "></i>
        </div>
      </header>
      <form>
        <div>
          <h1 className="flex gap-3 justify-center w-80% mt-16 font-black text-xl text-indigo-600">
            Formulario de consulta
          </h1>
          <div className=" flex gap-3 justify-center w-80% mt-16  ">
            <label className=" w-40 bg-indigo-50 p-2 shadow-md">
              Fecha Inicial
            </label>
            <input className=" p-2 shadow-md" type="date" />
            <label className=" w-40 bg-indigo-50 p-2 shadow-md">
              Fecha Final
            </label>
            <input className=" p-2 shadow-md" type="date" />
            <button className=" cursor-pointer hover:bg-indigo-500 w-40 p-2 bg-indigo-600 font-black text-white shadow-lg rounded-md">
              <i class="bx bx-search-alt "></i>Consultar
            </button>
          </div>
        </div>
      </form>
      <div class="flex justify-center">
        <table class=" w-3/4 m-20 text-sm text-left text-white dark:text-white ">
          <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-indigo-600 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                Linea
              </th>
              <th scope="col" class="px-6 py-3">
                Fecha
              </th>
              <th scope="col" class="px-6 py-3">
              Residencial [Costo/Wh]
              </th>
              <th scope="col" class="px-6 py-3">
              Comercial [Costo/Wh]
              </th>
              <th scope="col" class="px-6 py-3">
              Industrial [Costo/Wh]
              </th>
            </tr>
          </thead>
          {/* <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                datos aqui
              </th>
              <td class="px-6 py-4">datos</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                datos aqui
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                datos aqui
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default Vista2;
