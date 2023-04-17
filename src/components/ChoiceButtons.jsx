import './ChoiceButtons.css';
import { Button } from './ui/Button';


export const ChoiceButtons = ({ drinkOne, drinkTwo }) => {
    
    

    return (
        <>
            <div className='button-group'>
            <h3>Tijd voor een bakkie MaxHuichelaar</h3>
            <Button text={drinkOne} />
            <Button text={drinkTwo} />
            
            </div>  
        </>
        
    );
};
