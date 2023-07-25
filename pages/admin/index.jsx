import Input from '@/components/Form/Input'
import Title from '@/components/ui/Title'
import { useFormik } from 'formik'
import { adminSchema } from '@/schema/adminSchema'
import Link from 'next/link'

const Index = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve(alert(JSON.stringify(values, null, 2))), 2000))
        actions.resetForm()
    }



    const formik = useFormik({
        initialValues: {

            username: '',
            password: '',

        },
        onSubmit,
        // yap islemi
        validationSchema: adminSchema
    })
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "user name",
            value: formik.values.username,
            errorMessage: formik.errors.username,
            touched: formik.touched.username
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
                <Title title="admin login" addStyle="text-4xl" />
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
                    <Link href="/">
                        <span className="underline underline-offset-8 capitalize">home page</span>
                    </Link>

                </div>
            </form>
        </div>
    )
}

export default Index