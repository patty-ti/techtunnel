import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";


const Adm = () => {    
    const auth = useContext(AuthContext);
    return(
        
        <header>
            <h2>Dashbord</h2>
            Olá {auth.user?.email}
            
        </header>
        
        
    );
}

export default Adm;