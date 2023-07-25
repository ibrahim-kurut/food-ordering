import Title from '@/components/ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik'
import { footerSchema } from '@/schema/footerSchema'
import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'


const Footer = () => {

    {/* =============================  section 2  =============================*/ }
    const [linkAddress, setLinkAddress] = useState("")
    const [iconName, setIconName] = useState("");
    const [icons, setIcons] = useState(
        [
            'fa-brands fa-facebook-f',
            'fa-brands fa-twitter',
            "fa-brands fa-instagram"

        ]
    )
    {/* =============================  section 2  =============================*/ }

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        actions.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            location: "",
            email: "",
            phoneNumber: "",
            desc: "",
            day: "",
            time: "",
        },
        onSubmit,
        // Yup
        validationSchema: footerSchema

    })


    const inputs = [
        {
            id: 1,
            name: "location",
            type: "text",
            placeholder: "location",
            value: formik.values.location,
            errorMessage: formik.errors.location
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "your email address",
            value: formik.values.email,
            errorMessage: formik.errors.email
        },
        {
            id: 3,
            name: "phoneNumber",
            type: "number",
            placeholder: "your phone number",
            value: formik.values.phoneNumber,
            errorMessage: formik.errors.phoneNumber
        },
        {
            id: 4,
            name: "desc",
            type: "text",
            placeholder: "write a descripton ",
            value: formik.values.desc,
            errorMessage: formik.errors.desc
        },
        {
            id: 5,
            name: "day",
            type: "date",
            // placeholder: "write a day",
            value: formik.values.day,
            errorMessage: formik.errors.day
        },
        {
            id: 6,
            name: "time",
            type: "time",
            // placeholder: "write a time",
            value: formik.values.time,
            errorMessage: formik.errors.time
        }

    ]



    return (
        <form onSubmit={formik.handleSubmit}>
            <Title title="Footer" addStyle="font-dancing text-4xl" />
            <div className="grid md:grid-cols-2 grid-cols-1  gap-4 mt-4">
                {inputs.map((input) => (
                    <Input key={input.id} {...input} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                ))}
            </div>
            <div>
                {/* ============================= start section 2  =============================*/}
                <div className="flex gap-x-3 justify-between items-center sm:flex-row flex-col">
                    <div className="flex gap-x-3">
                        <Input
                            placeholder="link address"
                            defaultValue="http://" />
                        <Input
                            placeholder="icon name"
                            defaultValue="fa-brands fa-"
                            onChange={(e) => setIconName(e.target.value)}
                        />

                    </div>
                    <div className="flex justify-center items-center mb-2">
                        <button
                            type='button'
                            className="btn-primary capitalize"
                            onClick={() => {
                                setIcons([...icons, iconName]);
                                setIconName("fa-brands fa-");
                            }}
                        >add icon</button>
                    </div>
                    <ul className="flex gap-x-3 justify-center items-center">
                        {
                            icons.map((icon, index) => {
                                return (
                                    <li key={index} className="flex gap-x-1 justify-center items-center hover:opacity-60 cursor-pointer">
                                        <span
                                            className="text-red-400"
                                            onClick={() => {
                                                setIcons((prev) => prev.filter((item, i) => i !== index))
                                            }}
                                        ><FaTrashAlt /></span>
                                        <span><i className={`${icon}`}></i></span>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                {/* ============================= end section 2  =============================*/}
            </div>
            <button type='submit'
                className="bg-primary py-2 px-6 rounded-full hover:opacity-70 transition-opacity capitalize flex items-center gap-2">
                Update
            </button>

        </form>
    )
}

export default Footer