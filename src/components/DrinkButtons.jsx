import './DrinkButtons.css'

export const DrinkButtons = ({drinkOne, drinkTwo}) => {
    

    return (
        <>
        <div>
            
            <div className='button-group'>
            <h3>Tijd voor een bakkie</h3>
                <button className='button'>{drinkOne}</button>
                <button className='button'>{drinkTwo}</button>
            </div>
        </div>
        </>
        
    );
};

