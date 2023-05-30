import './DrinkList.css';
import { DrinkItem } from './DrinkItem';


export const DrinkList = ({matchedDrinks, clickFn}) => {
    
    return (

        <>
        {matchedDrinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
       ))}
        </>

    );
};


