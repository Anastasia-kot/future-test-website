export const mapArrayToStringWithSeparator = (arr, separator = ', ') => {
   let elements =   arr.map(item => {
        if ((arr.indexOf(item)) !== (arr.length - 1)) {
            return (<span key={arr.indexOf(item)}> {item + separator} </span>)
        } else { 
            return (<span key={arr.indexOf(item)}> {item + ' '} </span>) 
        }
    })
    return (elements);      
}
