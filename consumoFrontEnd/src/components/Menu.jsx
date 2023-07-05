import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const navigateVista1 = () => {
    navigate("/vista1");
  };

  const navigateVista2 = () => {
    navigate("/vista2");
  };

  const navigateVista3 = () => {
    navigate("/vista3");
  };

  return (
    <div className=" text-center  ">
      <header className=" w-screen  p-10 bg-indigo-600  shadow-2xl shadow-slate-400 ">
        <h1 className=" uppercase  font-black text-2xl text-indigo-100  ">
          Este Proyecto!
        </h1>
        <p className=" mt-4 font-semibold text-indigo-50">
          Permite obtener los datos de la base de datos por fechas, tramos y los
          organiza, esta desarrollado con React, NodeJs y TailwindCSS
        </p>
      </header>

      <div className=" flex mt-8  ">
        <a
          onClick={navigateVista1}
          className="  flex-1 bg-indigo-50 m-14 shadow-2xl p-3 rounded-lg cursor-pointer hover:bg-indigo-100 animate-flip-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out"
        >
          <h1 className=" font-bold text-indigo-600">
            Histórico Consumos por Tramos
          </h1>
          <p className=" font-semibold mt-8">
            Consulta el historico por cada tramo, que contenga el consumo,
            perdidas y costo por el consumo
          </p>
          <i className="bx bxs-dollar-circle bx-lg mt-4"></i>
        </a>

        <a
          onClick={navigateVista2}
          className=" flex-1  bg-indigo-50 m-14 shadow-2xl p-3 rounded-lg cursor-pointer  hover:bg-indigo-100 animate-flip-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out"
        >
          <h1 className=" font-bold text-indigo-600">
            Histórico Consumos por Cliente
          </h1>
          <p className=" font-semibold mt-4">
            Consulte el historico de cada tipo de usuario, que contenga el
            tramo, consumo, perdidas y costo por el consumo
          </p>
          <i className="bx bxs-user-circle bx-lg mt-4"></i>
        </a>

        <a
          onClick={navigateVista3}
          className=" flex-1  bg-indigo-50 m-14 shadow-2xl p-3 rounded-lg cursor-pointer  hover:bg-indigo-100 animate-flip-down animate-once animate-duration-1000 animate-delay-300 animate-ease-out "
        >
          <h1 className=" font-bold text-indigo-600">Top 20 Peores Tramos</h1>
          <p className=" font-semibold mt-4">
            Consulta el listado con los tramos/cliente con las mayores pérdidas,
            para efectos de mantenimiento preventivo y correctivo
          </p>
          <i className="bx bxs-down-arrow-circle bx-lg mt-4"></i>
        </a>
      </div>
    </div>
  );
};

export default Menu;
