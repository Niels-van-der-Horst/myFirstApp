import { useState } from 'react';
import './DrinkChoice.css';


export const DrinkChoice = ({drink}) => {
    useState

    return (
        <>
        <div className='showDrink'>
        <h2>{drink.name}</h2>
        <img src={drink.imgUrl} alt={drink.alt}  width='100px' height='100px'/>
        <p>Vers doorgebrand slootwater</p>
        <h3>op basis van bonensiroop en gemaakt in fabriek waar mensen ook thee drinken</h3>
        
        </div>
        </>
    );
};