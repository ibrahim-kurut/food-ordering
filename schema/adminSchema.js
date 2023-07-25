import * as Yup from 'yup';

export const adminSchema = Yup.object({
    username: Yup.string().
        required("user name is required").min(3, "user name is must be at least 3 characters"),
    password: Yup.string()
        .required("password is required")
        .min(8, "password must be at least 8 chracters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase, one lowercase, one number and one special character."
        ),

})