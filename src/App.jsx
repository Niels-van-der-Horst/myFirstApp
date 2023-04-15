
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { tea, coffee } from './utils/data';
import { Button } from './components/ui/Button';

export const App = () => {

const greeting = "welkom back!";

  return (
    <>
    <div className="header">
      <h1>{greeting}</h1>
      <h2>Code & Coffee</h2>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <Button />
    </div>
    </>
   
    
    
  );
};

