import * as yup from "yup";

const contactSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required(),
	message: yup.string().required(),
});

export default contactSchema;
