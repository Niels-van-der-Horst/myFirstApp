import { useState } from 'react';
import './DrinkSearch.css';
import { TextInput } from './ui/TextInput';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';

export const DrinkSearch = ({ clickFn, changeFn}) => {
const [searchField, setSearchField] = useState('');
    
const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
});

const handleChange = (event) => setSearchField(event.target.value);


    return (
        
        <>
        <TextInput changeFn={changeFn}/>
        <p>{searchField}</p>
        <DrinkList clickFn={clickFn} matchedDrinks={matchedDrinks}/>
        </>
    );

};