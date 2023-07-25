import * as Yup from "yup"
export const footerSchema = Yup.object({
    location: Yup.string()
        .required("location is required"),
    email: Yup.string().
        required("email is required").
        email("email is not valid"),
    phoneNumber: Yup.string().
        required("phone is required").
        min(10, "phone is must be at least 10 characters").
        max(11, "phone is must be at most 11 characters"),
    desc: Yup.string().
        required("description is required"),
    day: Yup.string().
        required("day is required"),
    time: Yup.string().
        required("time is required")

})