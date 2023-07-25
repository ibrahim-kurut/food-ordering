import * as Yup from 'yup';

export const reservationSchema = Yup.object({
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
    persons: Yup.string().
        required("persons is required"),
    date: Yup.string().
        required("date is required")
})