import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Cadastrar from './Pages/Cadastrar/Cadastrar';
import FinalPedidosStep1 from './Pages/FinalizarPedido/FinalPedidosStep1/FinalPedidosStep1';
import FinalPedidosStep2 from './Pages/FinalizarPedido/FinalPedidosStep2/FinalPedidosStep2';
import FinalPedidosStep3 from './Pages/FinalizarPedido/FinalPedidosStep3/FinalPedidosStep3';
import StatusPedidos from './Pages/StatusPedidos/StatusPedidos';
import Admin from './Pages/Admin/Admin';
import { RequireAuth } from './Contexts/RequireAuth';
import DetalhesProd from './Pages/Detalhes/DetalhesProd';

function App () {
  return(    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="cadastrar"element={<Cadastrar />}/>
        <Route path="detalhes" element={<DetalhesProd />}/>
        <Route path="finalizarpedidostep1" element={<FinalPedidosStep1 />} />        
        <Route path="finalizarpedidostep2"element={<FinalPedidosStep2 />}/>
        <Route path="finalizarpedidostep3"element={<FinalPedidosStep3 />}/> 
        <Route path="statuspedidos"element={<StatusPedidos />}/> 
        <Route path="private" element={<RequireAuth><Admin /></RequireAuth>} />
    </Routes>         
  );
}

export default App;    