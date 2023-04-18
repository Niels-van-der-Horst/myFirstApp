
import './App.css';
import { tea, coffee } from './utils/data';
import { ChoiceButtons } from './components/ChoiceButtons';
import { DrinkChoice } from './components/DrinkChoice';


export const App = () => {

const greeting = "welkom back!";
const userDrink = coffee;

// const userChoice = (drink) => {

// }

  return (
    
      <div className="header">
        
        {userDrink ? ( 
            <DrinkChoice drink={userDrink} />
            ) : (        
          <>
          <h1>{greeting}</h1>
          <h2>Code & Coffee</h2>
          <ChoiceButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          </>
            )}
      </div>
    
   
    
    
  );
};

