import swal from "sweetalert2";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Vista1 = () => {
  const [fechaInit, setFechaInit] = useState("");
  const [fechaEnd, setFechaEnd] = useState("");
  const [consumoV1, setConsumoV1] = useState([]);
  const [mesage, setMesage] = useState(false);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const fetch = (url) => {
    let urlFetch;
    if (url) {
      urlFetch = url;
    } else {
      urlFetch = `http://localhost:3000/api/v1/consumos/${fechaInit}/${fechaEnd}?limit=20&offset=0`;
    }
    axios.get(urlFetch).then((res) => {
      setConsumoV1(res.data.data);
      setData(res.data);
    });
  };

  const serachV1 = () => {
    if (fechaInit === "" || fechaEnd === "") {
      swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios!",
        background: "#eef2ff",
      });
    } else {
      fetch();
      setTimeout(() => {
        setMesage(true);
      }, 1000);
    }
  };

  const fetchPrevious = () => {
    fetch(data.previous);
  };

  const fetchNext = () => {
    fetch(data.next);
  };

  return (
    <div className=" flex-col ">
      <header className=" w-100% p-2  mr20 bg-indigo-600 shadow-2xl shadow-slate-400  ">
        <div className=" flex justify-around align-middle content-center items-center  ">
          <h1 className=" uppercase  font-black text-xl text-indigo-100  ">
            Histórico Consumos por Tramos
          </h1>
          <i
            onClick={goHome}
            className="bx bxs-door-open bx-lg bx-fade-left-hover   text-indigo-100 cursor-pointer "
          ></i>
        </div>
      </header>

      <form>
        <div>
          <h1 className="flex gap-3 justify-center w-80% mt-10 font-black text-xl text-indigo-600">
            Formulario de consulta
          </h1>
          <div className=" flex gap-3 justify-center w-80% mt-16  ">
            <label className=" w-40 bg-indigo-50 p-2 shadow-md">
              Fecha Inicial
            </label>
            <input
              className=" p-2 shadow-md"
              id="fechaInit"
              type="date"
              value={fechaInit}
              onChange={(e) => setFechaInit(e.target.value)}
            />
            <label className=" w-40 bg-indigo-50 p-2 shadow-md">
              Fecha Final
            </label>
            <input
              className=" p-2 shadow-md"
              type="date"
              id="fechaEnd"
              value={fechaEnd}
              onChange={(e) => setFechaEnd(e.target.value)}
            />
            <button
              onClick={() => serachV1()}
              className=" cursor-pointer hover:bg-indigo-500 w-40 p-2 bg-indigo-600 font-black text-white shadow-lg rounded-md"
            >
              <i className="bx bx-search-alt "></i>Consultar
            </button>
          </div>
        </div>
      </form>

      <div className="flex-col justify-center content-center m-10">
        {
          consumoV1.length != 0 ? <div className=" flex justify-center gap-8 content-center">
          <button
            className=" bg-indigo-600 m-10 p-2 rounded-md font-bold disabled:bg-indigo-200 "
            onClick={fetchPrevious}
            disabled={data?.previous === null || consumoV1.length === 0}
          >
            Anterior
          </button>
          <h1 className=" font-black text-indigo-600">
            Pag: {data?.data?.length}
          </h1>
          <button
            className=" bg-indigo-600 m-10 p-2 rounded-md font-bold disabled:bg-indigo-200 "
            onClick={fetchNext}
            disabled={data?.next === null || consumoV1.length === 0}
          >
            Siguiente
          </button>
        </div> : <div></div> 
        }
        
        {
          consumoV1.length != 0 ? <div className=" flex justify-center ">
          <table className=" w-10/12 text-sm text-center text-gray-500 dark:text-black  ">
            <thead className="text-xs text-gray-00 uppercase bg-gray-50 dark:bg-indigo-600 dark:text-white font-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Consumo
                </th>
                <th scope="col" className="px-6 py-3">
                  Perdidas
                </th>
                <th scope="col" className="px-6 py-3">
                  Costo Consumo
                </th>
              </tr>
            </thead>

            <tbody>
              {consumoV1?.map((c) => (
                <tr
                  key={c.id}
                  className="bg-white border-b dark:bg-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-sm text-gray-900 whitespace-nowrap dark:text-indigo-600"
                  >
                    {c.Consumo}
                  </th>
                  <td className="px-6 py-4">{c.Perdida}</td>
                  <td className="px-6 py-4">{c.Costo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> : <div className=" text-center text-2xl mt-20 font-bold text-indigo-600">
        {mesage ? (
          (!consumoV1 || consumoV1.length == 0) && (
            <h3>No hay datos en las fechas seleccionadas</h3>
          )
        ) : (
          <div>Aquí se mostrarán los datos de la fechas seleccionadas</div>
        )}
      </div>
        }
        
      </div>
      
    </div>
  );
};

export default Vista1;
