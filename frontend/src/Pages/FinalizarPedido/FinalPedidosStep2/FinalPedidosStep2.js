import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import * as S from './FinalPedidosStep2.styles';
import { Formik, Field } from 'formik';

function onSubmit(values) {
    console.log('SUBMIT', values);
}

function onBlurCep(e, setFieldValue) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, '');
    if (cep?.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
        setFieldValue('Logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
    });
}

const FinalPedidosStep2 = () => {    
    return(
        <S.Container> 
            <Header />            
            <S.Title>Informe o endereço de entrega:</S.Title>
            <Formik 
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    cep: '', 
                    logradouro: '',
                    numero: '',
                    complemento: '',
                    bairro: '',
                    cidade: '',
                    uf: '',
                }}
                render={({ isValid, setFieldValue }) => (
                <>      
                    <S.FormAdress>
                        <label>Cep:</label>
                        <Field name="cep" type="text" placeholder="Informe seu CEP" onBlur={(e) => onBlurCep(e, setFieldValue)} />
                    </S.FormAdress>
                    <S.FormAdress>
                            <label>Logradouro:</label>
                            <Field name="logradouro" type="text" placeholder="Informe sua Rua/Avenida/Estrada"></Field>
                        </S.FormAdress>
                        <S.FormAdress>
                            <label>Número:</label>
                            <Field name="numero" type="text" placeholder="Informe seu Número" />
                        </S.FormAdress>
                        <S.FormAdress>
                            <label>Complemento:</label>
                            <Field name="complemento" type="text" placeholder="Informe um ponto de referência"></Field>
                        </S.FormAdress>
                        <S.FormAdress>
                            <label>Bairro:</label>
                            <Field name="bairro" type="text" placeholder="Informe seu Bairro"></Field>
                        </S.FormAdress>
                        <S.FormAdress>
                            <label>Cidade:</label>
                            <Field name="cidade" type="text" placeholder="Informe sua Cidade"></Field>
                        </S.FormAdress>
                        <S.FormAdress>
                            <label>Estado:</label>
                            <Field component="select" name="uf">
                            <option value={null}>Selecione seu Estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ"> Rio de Janeiro</option>
                            <option value="PR"> Paraná</option>
                            <option value="MG">Minas Gerais</option>
                            </Field>
                        </S.FormAdress>
                        <S.Navigation>
                            <S.Button>
                            <Link to="/finalizarpedidostep1"> Voltar </Link>
                            </S.Button> 

                            <S.Button type="submit" disabled={!isValid}>
                            <Link to="/finalizarpedidostep3"> Próximo </Link>
                            </S.Button> 
                        </S.Navigation>   
                        </>  
                )}                
            />   
        </S.Container>
    );
}

export default FinalPedidosStep2;