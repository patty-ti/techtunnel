import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
    currentStep: number;
    name: string;    
    email: string;
    password: string;
}
type Action = {
    type: CAdActions;
    payload: any;
};
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: ReactNode
};

const initialData: State = {
    currentStep: 0,
    name: '',    
    email: '',
    password: ''
}

// Context
const CadastroContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum CAdActions {
    setCurrentStep,
    setName,    
    setEmail,
    setPassword
}
const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case CAdActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case CAdActions.setName:            
            return {...state, name: action.payload};
        case CAdActions.setEmail:
            return {...state, email: action.payload};
        case CAdActions.setPassword:
            return {...state, password: action.payload};
        default:
            return state;
    }
}

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <CadastroContext.Provider value={value}>
            {children}
        </CadastroContext.Provider>
    );
}

export const useForm = () => {
    const context = useContext(CadastroContext);
    if(context === undefined) {
        throw new Error('useForm não está sendo usado dentro do FormProvider');
    }
    return context;
}