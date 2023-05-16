import { useState } from 'react';
import './DrinkSearch.css';
import { TextInput } from './ui/TextInput';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';

export const DrinkSearch = () => {
const [searchField, SetSearchField] = useState('choose drink');
     
    return (
        
        <>
        <TextInput />
        <p>{searchField}</p>
        <DrinkList drinks={availableDrinks} />
        </>
    );

};