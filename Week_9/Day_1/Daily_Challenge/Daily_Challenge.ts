const validateUnionType = (value : any, allowedTypes : string[]) : boolean => 
    allowedTypes.includes(typeof(value));