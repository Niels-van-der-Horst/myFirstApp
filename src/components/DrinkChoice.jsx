
import './DrinkChoice.css';
import { Button } from './ui/Button';

export const DrinkChoice = ({drink, clickFn}) => {
   

    return (
        <>
        <div className='showDrink'>
        <h2>{drink.name}</h2>
        <img src={drink.imgUrl} alt={drink.alt}  width='100px' height='100px'/>
        <p>Your drink will be prepared....</p>
        <Button text={'change selection'} clickFn={() => clickFn()}  /> 
        </div>
        </>

    );
};




