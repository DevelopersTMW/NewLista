import * as yup from 'yup';

export default yup.object().shape({
  email: yup.string().email().required("Email is required"),
  phone: yup.string().min(10).required("Phone number is required")
});