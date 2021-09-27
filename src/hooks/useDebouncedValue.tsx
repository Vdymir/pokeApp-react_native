import { useEffect, useState } from 'react'

export const useDebouncedValue = ( text:string = '', time:number=500) => {

    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        
        const timeOut = setTimeout(() => {
            setDebouncedValue(text)
        }, time);
        return () => {
            clearTimeout(timeOut)
        }
    }, [text] )


    return debouncedValue
    
}
