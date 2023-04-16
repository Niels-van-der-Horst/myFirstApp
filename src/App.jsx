
import './App.css';
import { tea, coffee } from './utils/data';
import { ChoiceButtons } from './components/ChoiceButtons';



export const App = () => {

const greeting = "welkom back!";

  return (
    <>
    <div className="header">
      <h1>{greeting}</h1>
      <h2>Code & Coffee</h2>
      <ChoiceButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      
    </div>
    </>
   
    
    
  );
};

