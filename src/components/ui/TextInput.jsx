import { useState } from 'react';
import './TextInput.css';


export const TextInput = (changeFn) => {

    return 
        <input type='text' className='input' onChange={changeFn}></input>

    
};
