
import './App.css';
import React, { useState } from 'react';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { DrinkItem } from './components/DrinkItem';
import { availableDrinks } from './utils/data';
import { Heading } from '@chakra-ui/react';

export const App = () => {

const greeting = "Welkom ";
const [userDrink, setUserDrink] = useState();


  return (
    
      <div className="header">
        
        {userDrink ? ( 
          <DrinkChoice drink={userDrink} clickFn={setUserDrink}/>

            ) : ( 

          <>
          <Heading size="2xl" mb="8" color="blue.200" >{greeting}</Heading>
          <h2>Code & Coffee</h2>
          <DrinkSearch clickFn={setUserDrink} />
          <DrinkItem drink={availableDrinks} />
          </>
            )}
            
      </div>
    
  );
};

