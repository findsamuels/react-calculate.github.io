export const DISPLAY_RESULT = 'DISPLAY_RESULT'
export const SHOW_ENTRY = 'SHOW_ENTRY'

export const displayResult = (result) => {
return{
    type: DISPLAY_RESULT,
    result: result
}
}

export const showEntry = (entry) => {
return{
    type: SHOW_ENTRY,
    entry: entry
}
}