import Input from '@/components/Form/Input'
import Title from '@/components/ui/Title'
import { useFormik } from 'formik'
import { registerSchema } from '@/schema/registerSchema'
import { AiFillGithub } from "react-icons/ai"
import Link from 'next/link'

const register = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve(alert(JSON.stringify(values, null, 2))), 2000))
        actions.resetForm()
    }



    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''

        },
        onSubmit,
        // yap islemi
        validationSchema: registerSchema
    })
    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "your full name ",
            value: formik.values.fullName,
            errorMessage: formik.errors.fullName,
            touched: formik.touched.fullName
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "your email address",
            value: formik.values.email,
            errorMessage: formik.errors.email,
            touched: formik.touched.email
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "your password",
            value: formik.values.password,
            errorMessage: formik.errors.password,
            touched: formik.touched.password
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "your confirm Password",
            value: formik.values.confirmPassword,
            errorMessage: formik.errors.confirmPassword,
            touched: formik.touched.confirmPassword
        }

    ]
    return (
        <div className="container mx-auto h-[60vh]">
            <div className="text-center my-5">
                <Title title="register" addStyle="text-4xl" />
            </div>
            <form onSubmit={formik.handleSubmit}>
                {inputs.map((input) => {
                    return (
                        <Input key={input.id} {...input} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    )
                })}

                <div className="flex flex-col gap-y-2 mb-5">
                    <button className="bg-primary py-2 px-6 rounded-xl hover:opacity-70 transition-opacity capitalize flex items-center gap-2 w-full justify-center">
                        register
                    </button>

                    <Link href="/auth/login">
                        <span className="underline underline-offset-8 capitalize">i have a account</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}


export default register