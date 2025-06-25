import * as yup from "yup";

export const onboardingSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  location: yup.string().required(),
  bio: yup.string(),
  experience: yup.string(),
  feeRange: yup.string(),
  languages: yup.array().of(yup.string()),
});
