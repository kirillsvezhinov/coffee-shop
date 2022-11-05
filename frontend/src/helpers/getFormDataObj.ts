interface IFormDataObj {
    [key: string]: any;
}

function getFormDataObj(formData: FormData) {
    const formDataObj: IFormDataObj = {};
    
    formData.forEach((value, key) => (formDataObj[key] = value));
    
    return formDataObj;
}

export default getFormDataObj;