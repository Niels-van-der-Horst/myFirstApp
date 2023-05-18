import { useState } from 'react';
import './DrinkSearch.css';
import { TextInput } from './ui/TextInput';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';

export const DrinkSearch = ({ clickFn} ) => {
const [searchField, SetSearchField] = useState('choose drink');
     
const handleChange = event => SetSearchField(event.target.value);

    return (
        
        <>
        <TextInput changeFn={changeFn}/>
        <p>{searchField}</p>
        <DrinkList clickFn={clickFn} drinks={availableDrinks} />
        </>
    );

};