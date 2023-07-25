import Input from '@/components/Form/Input'
import Title from '@/components/ui/Title'
import { useFormik } from 'formik'
import { loginSchema } from '@/schema/loginSchema'
import { AiFillGithub } from "react-icons/ai"
import Link from 'next/link'

const login = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve(alert(JSON.stringify(values, null, 2))), 2000))
        actions.resetForm()
    }



    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',

        },
        onSubmit,
        // yap islemi
        validationSchema: loginSchema
    })
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "your email address",
            value: formik.values.email,
            errorMessage: formik.errors.email,
            touched: formik.touched.email
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "your password",
            value: formik.values.password,
            errorMessage: formik.errors.password,
            touched: formik.touched.password
        },

    ]
    return (
        <div className="container mx-auto h-[60vh]">
            <div className="text-center my-5">
                <Title title="login" addStyle="text-4xl" />
            </div>
            <form onSubmit={formik.handleSubmit}>
                {inputs.map((input) => {
                    return (
                        <Input key={input.id} {...input} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    )
                })}

                <div className="flex flex-col gap-y-2 mb-5">
                    <button className="bg-primary py-2 px-6 rounded-xl hover:opacity-70 transition-opacity capitalize flex items-center gap-2 w-full justify-center">
                        login
                    </button>
                    <button className="bg-secondary text-white py-2 px-6 rounded-xl hover:opacity-70 transition-opacity capitalize flex items-center gap-2 w-full justify-center">
                        github
                        <AiFillGithub size={20} />
                    </button>
                    <Link href="/auth/register">
                        <span className="underline underline-offset-8 capitalize">register a new account</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default login