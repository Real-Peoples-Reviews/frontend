import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid')

});

export default schema;
