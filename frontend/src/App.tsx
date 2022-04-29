import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Cadastrar from './Pages/Cadastrar/Cadastrar';
import FinalizarPedido from './Pages/FinalizarPedido/FinalizarPedido';

function App () {
  return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="cadastrar"element={<Cadastrar />}/>
        <Route path="finalizarpedido"element={<FinalizarPedido />}/>
    </Routes> 
    
);
}

export default App;
    