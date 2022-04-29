import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import App from './App';
import Cadastrar from './Pages/Cadastrar/Cadastrar';
import FinalizarPedido from './Pages/FinalizarPedido/FinalizarPedido';

export default () => {
    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="cadastrar"element={<Cadastrar />}/>
            <Route path="finalizarpedido"element={<FinalizarPedido />}/>
        </Routes> 
        
    );
}
