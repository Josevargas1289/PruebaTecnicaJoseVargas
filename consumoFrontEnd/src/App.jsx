import { HashRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Vista1 from "./pages/Vista1";
import Vista2 from "./pages/Vista2";
import Vista3 from "./pages/Vista3";

function App() {
  return (
    <div>
      <HashRouter>
        
        <Routes>   
          <Route path= '/' element={<Menu/>} />
          <Route path='/vista1' element={<Vista1/>}/>
          <Route path='/vista2' element={<Vista2/>}/>
          <Route path='/vista3' element={<Vista3/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
