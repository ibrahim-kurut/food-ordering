import React from 'react'
import Input from '../form/Input'
import { useFormik } from 'formik'
import { updatePasswordSchema } from '@/schema/updatePasswordSchema'
import Title from '../ui/Title'
// import axios from 'axios'
import { toast } from 'react-toastify'
import Btn from '../ui/Btn'

const Password = ({ user }) => {


    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve(alert(JSON.stringify(values, null, 2))), 2000))
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            enableReinitialize: false,
            password: '',
            confirmPassword: '',
        },
        onSubmit,
        // Yup
        validationSchema: updatePasswordSchema

    })


    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: "your password",
            value: formik.values.password,
            errorMessage: formik.errors.password,
            touched: formik.touched.password

        },
        {
            id: 2,
            name: "confirmPassword",
            type: "password",
            placeholder: "your confirm password",
            value: formik.values.confirmPassword,
            errorMessage: formik.errors.confirmPassword,
            touched: formik.touched.confirmPassword
        }

    ]



    return (
        <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={formik.handleSubmit}>
            <Title title="my password" addClass="text-[40px]" />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                ))}
            </div>
            {/* <button className="btn-primary mt-4 cursor-pointer" type="submit">
                Update
            </button> */}
            <Btn type="submit" btnName="Update" />
        </form>
    )
}

export default Password

