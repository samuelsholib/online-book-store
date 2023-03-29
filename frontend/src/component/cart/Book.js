import { TiDeleteOutline } from 'react-icons/ti';
function Book({item, removeItem}){

    return(
        <tr>
            <td>
                {item.cover ?
                    <img className="cover" src={`http://localhost:3000/${item.cover}`} alt={`Cover for ${item.title}`} />
                    : <img className="cover" src="http://localhost:3000/no_cover.png" alt={`Cover for ${item.title}`} />
                }    
            </td>
            <td>{item.title}</td>
            <td>{item.authors}</td>
            <td><button id="delete" type="button" className="deletebtn" onClick={removeItem}><TiDeleteOutline /></button></td>
        </tr>
    );
}

export default Book;