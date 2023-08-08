import {useNavigate} from 'react-router-dom';
const SearchResultsRow = ({house}) => {

    let navigate = useNavigate();

    //console.log('SearchResultsRow',house);
    let onClickHandler = () => {
        navigate(`/searchedhouse/${house.id}`);
    }

    return ( 
        <tr onClick={onClickHandler}>
            <td>{house.address}</td>
            <td>$ {house.price}</td>
        </tr>
     );
}
 
export default SearchResultsRow;