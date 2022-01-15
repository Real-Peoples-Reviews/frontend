import * as yup from "yup";

const contactSchema = yup.object().shape({
	name: yup.string().name().required(),
	email: yup.string().email().required(),
	message: yup.string().message().required(),
});

export default contactSchema;
