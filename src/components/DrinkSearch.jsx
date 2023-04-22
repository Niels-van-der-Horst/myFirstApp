import { useState } from 'react';
import './DrinkSearch.css';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = () => {
const [searchField, SetSearchField] = useState('choose drink');
     
    return (
        <>
        
        <TextInput />
        <p>{searchField}</p>
       
        </>
    );

};