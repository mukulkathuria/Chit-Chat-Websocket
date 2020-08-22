import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(3).required(),
  room:Yup.string().min(3).required()
});
