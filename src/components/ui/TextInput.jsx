import { Input } from '@chakra-ui/react'

export const TextInput = (changeFn) => {

    return (
    <Input variant="filled" placeholder='search..' size='md'w={200} onChange={changeFn} />
    )
    
};
