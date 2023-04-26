
import './App.css';
import React, { useState } from 'react';
import { tea, coffee, goatmilk, availableDrinks } from './utils/data';
import { ChoiceButtons } from './components/ChoiceButtons';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch.jsx';


export const App = () => {

const greeting = "welkom back!";
const [userDrink, setUserDrink] = useState();

  return (
    
      <div className="header">
        
        {userDrink ? ( 
            <DrinkChoice drink={userDrink} />
            ) : (        
          <>
          <h1>{greeting}</h1>
          
          <h2>Code & Coffee</h2>
          <DrinkSearch />
          <ChoiceButtons drinkOne={tea.name} drinkTwo={coffee.name} drinkThree={goatmilk.name} />
          
          </>
            )}
      </div>
    
   
    
    
  );
};

