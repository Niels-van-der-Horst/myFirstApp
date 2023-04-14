
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';



export const App = () => {

const greeting = "welkom back!";

  return (
    <>
    <div className="header">
      <h1>{greeting}</h1>
      <h2>Joost</h2>
      <DrinkButtons />
      
    </div>
    </>
   
    
    
  );
};

