import { string, array, object } from "yup";

// using YUP library for form validation
export const validationSchema = object({
  groupname: string().min(4).max(25).required("*Please enter your group name"),
  description: string().min(80).max(200).required("*Please enter description"),
  flashterms: array(
    object({
      term: string().required().min(4).max(15).required("*Please enter term"),
      defination: string()
        .required()
        .min(30)
        .max(200)
        .required("*Please enter defination"),
    })
  ),
});
