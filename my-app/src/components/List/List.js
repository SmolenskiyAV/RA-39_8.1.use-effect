/* eslint-disable jsx-a11y/anchor-is-valid */

// ### 
import "./list.css";

export default function List(props) {  // функция отрисовки всего списка

   const { itemsObj } = props;
   const { onClick: handleClick } = props;
    
    function ListItem(itemOfList) { // функция отрисовки элемента

        const { id } = itemOfList;
        const { name } = itemOfList;
                
        return (
            <ul key={id} className="users__list"  id={id}>
            <li  className="name" onClick={handleClick}>
                {name}
            </li>
            </ul>
        )
    }   
           
    return (
        <>
            {itemsObj.map((itemOfList) => ListItem(itemOfList))}
        </>
    );
};