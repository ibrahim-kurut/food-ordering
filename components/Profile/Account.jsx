import Title from '@/components/ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik'
import { accountSchema } from '@/schema/accountSchema'
// import axios from 'axios'
// import { toast } from 'react-toastify'
import Btn from '../ui/Btn'

const Account = ({ user }) => {


    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve(alert(JSON.stringify(values, null, 2))), 2000))
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            enableReinitialize: false,
            // update islemi buraya gore yapilacak 
            // user?. varsa var yoksa ona gore update yaoilacak
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            job: "",
            bio: "",
        },
        onSubmit,
        // Yup
        validationSchema: accountSchema

    })


    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "your full name",
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
            name: "phoneNumber",
            type: "number",
            placeholder: "your phone number",
            value: formik.values.phoneNumber,
            errorMessage: formik.errors.phoneNumber,
            touched: formik.touched.phoneNumber
        },
        {
            id: 4,
            name: "address",
            type: "text",
            placeholder: "your address ",
            value: formik.values.address,
            errorMessage: formik.errors.address,
            touched: formik.touched.address
        },
        {
            id: 5,
            name: "job",
            type: "text",
            placeholder: "your job",
            value: formik.values.job,
            errorMessage: formik.errors.job,
            touched: formik.touched.job
        },
        {
            id: 6,
            name: "bio",
            type: "text",
            placeholder: "your bio",
            value: formik.values.bio,
            errorMessage: formik.errors.bio,
            touched: formik.touched.bio
        }

    ]



    return (
        <form onSubmit={formik.handleSubmit}>
            <Title title="account setting" addStyle="font-dancing text-4xl" />
            <div className="grid md:grid-cols-2 grid-cols-1  gap-4 mt-4">
                {inputs.map((input) => (
                    <Input key={input.id} {...input}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} />
                ))}
            </div>
            {/* <button type='submit' className="btn-primary mt-4">Update</button> */}
            <Btn type='submit' btnName="Update" />
        </form>
    )
}

export default Account