import './ChoiceButtons.css';
import { Button } from './ui/Button';


export const ChoiceButtons = ({ drinkOne, drinkTwo, text }) => {
    
    

    return (
        <>
            <div className='button-group'>
            <h3>Tijd voor een bakkie</h3>
            <Button text={drinkOne} />
            <Button text={drinkTwo} />
            
            </div>  
        </>
        
    );
};

