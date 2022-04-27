import * as S from './Search.styles';

const Search:React.FC<any> = ({handleChangeSearch}) => {

    return (
        <S.Search>            
            <S.SearchArea>
                <input 
                    type="text"
                    placeholder="Qual produto você deseja encontrar?"
                    onChange={({target}) => handleChangeSearch(target)}
                />  
                
            </S.SearchArea>
        </S.Search>
    );
}

export default Search;