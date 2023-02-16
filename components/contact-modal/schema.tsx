import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email("Nie je platný e-mail").required("Povinný údaj"),
  password: yup.string().required("Povinný údaj"),
})
