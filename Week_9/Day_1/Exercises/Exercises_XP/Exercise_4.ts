
const checkNumber = (num : number):string => {
    if(num > 0)
        return "Positive";
    if(num < 0)
        return "Negative";
    return "Zero";
}

checkNumber(5);