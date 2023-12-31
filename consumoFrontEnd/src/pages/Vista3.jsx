import swal from "sweetalert2";
import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";





const Vista1 = () => {
  const [fechaInit, setFechaInit] = useState("");
  const [fechaEnd, setFechaEnd] = useState("");
  const [consumoV3, setConsumoV3] = useState([]);
  const [mesage, setMesage] = useState(false);
 

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const fetch = () => {
    axios
      .get(`http://localhost:3000/api/v1/top20/${fechaInit}/${fechaEnd}`)
      .then((res) => {
        setConsumoV3(res.data);
       
        
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
        setMesage(true)
      }, 1000);
    
    }
  };
  // console.log(consumoV3);

  return (
    <div className=" flex-col ">
      <header className=" w-100% p-2  mr20 bg-indigo-600 shadow-2xl shadow-slate-400  ">
        <div className=" flex justify-around align-middle content-center items-center  ">
          <h1 className=" uppercase  font-black text-xl text-indigo-100  ">
            Top 20 perdidas
          </h1>
          <i
            onClick={goHome}
            className="bx bxs-door-open bx-lg bx-fade-left-hover   text-indigo-100 cursor-pointer "
          ></i>
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
    {
      consumoV3 != 0 ?  <div className="flex mt-12 justify-center overflow-y-auto">
      <table className=" w-10/12 text-sm text-center text-gray-500 dark:text-black  ">
        <thead className="text-xs text-gray-00 uppercase bg-gray-50 dark:bg-indigo-600 dark:text-white font-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              LineaNombre
            </th>
            <th scope="col" className="px-6 py-3">
              NombreCliente
            </th>
            <th scope="col" className="px-6 py-3">
              Perdida
            </th>
          </tr>
        </thead>

        <tbody>
          {consumoV3.map((c, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-sm text-gray-900 whitespace-nowrap dark:text-indigo-600"
              >
                {c.LineaNombre}
              </th>
              <td className="px-6 py-4">{c.NombreCliente}</td>
              <td className="px-6 py-4">{c.Perdida}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>: <div className=" text-center text-2xl mt-20 font-bold text-indigo-600">
        {
          mesage ? (!consumoV3 || consumoV3.length == 0 ) && <h3>No hay datos en las fechas seleccionadas</h3>  :<div>Aquí se mostrarán los datos de la fechas seleccionadas</div>
          
        } 
      </div>
    }
     
      
    </div>
  );
};

export default Vista1;
