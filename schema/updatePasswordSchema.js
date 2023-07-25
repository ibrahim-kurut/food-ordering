import * as Yup from "yup"
export const updatePasswordSchema = Yup.object({

    password: Yup.string()
        .required("password is required")
        .min(8, "password must be at least 8 chracters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase, one lowercase, one number and one special character."
        ),
    confirmPassword: Yup.string()
        .required("confirm password is required")
        .oneOf([Yup.ref("password"), null], "password must match")



})