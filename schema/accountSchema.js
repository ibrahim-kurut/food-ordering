import * as Yup from "yup"
export const accountSchema = Yup.object({
    fullName: Yup.string()
        .required("full name is required")
        .min(3, "full name is must be at least 3 characters"),
    email: Yup.string().
        required("email is required").
        email("email is not valid"),
    phoneNumber: Yup.string().
        required("phone is required").
        min(10, "phone is must be at least 10 characters").
        max(11, "phone is must be at most 11 characters"),
    address: Yup.string().
        required("address is required"),
    job: Yup.string().
        required("job is required"),
    bio: Yup.string().
        required("bio is required")

})