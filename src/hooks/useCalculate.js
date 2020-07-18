import {useState} from 'react'




export const useCalculate = () => {
const [result, setResult] = useState(0)
const [numbers, setNumbers] = useState('')



const clearEntry = (event) => {
let name = event.target.name
    switch (name) {
        case 'ac':
                setNumbers('')
                break;
            case 'c':
                    let removedNums = numbers.slice(0, -1)
                    setNumbers(removedNums)
                    break
    
        default:
            break;
    }
}
const getNumbersArray = (myNumbers) => {

    switch (myNumbers) {
        case '=':
            let myResult = 0
            if(numbers !== ''){
            myResult = eval(numbers)
            }
            setResult(myResult)
            break;
            
                   
        default:
            let nums = numbers + myNumbers 
            setNumbers(nums)  
    }
   
}
    return {
      
        result,
        numbers,
        getNumbersArray,
        clearEntry
        
    }

}

