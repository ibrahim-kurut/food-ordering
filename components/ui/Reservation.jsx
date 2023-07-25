import { reservationSchema } from '@/schema/reservationSchema'
import Input from '../Form/Input'
import Title from './Title'
import { useFormik } from 'formik'
const Reservation = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve(alert(JSON.stringify(values, null, 2))), 2000))
        actions.resetForm()
    }

    // form validation using Formik
    const formik = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            persons: '',
            date: '',
        },
        onSubmit,
        // yap islemi
        validationSchema: reservationSchema
    })
    // console.log(formik.values);
    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: formik.values.fullName,
            errorMessage: formik.errors.fullName,
            touched: formik.touched.fullName

        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
            value: formik.values.phoneNumber,
            errorMessage: formik.errors.phoneNumber,
            touched: formik.touched.phoneNumber
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
            value: formik.values.email,
            errorMessage: formik.errors.email,
            touched: formik.touched.email
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons?",
            value: formik.values.persons,
            errorMessage: formik.errors.persons,
            touched: formik.touched.persons
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            placeholder: "",
            value: formik.values.date,
            errorMessage: formik.errors.date,
            touched: formik.touched.date
        },
    ];


    return (
        <div className="container mx-auto">
            <Title title="book a table" />
            <div className="flex flex-wrap gap-5 justify-between items-center capitalize">
                <div className="lg:flex-1 w-full mt-5">
                    <form onSubmit={formik.handleSubmit}>
                        {inputs.map((input) => (
                            <Input key={input.id} {...input}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        ))}
                        <button type="submit" className="bg-primary py-2 px-6 rounded-full hover:opacity-70 transition-opacity capitalize flex items-center gap-2">
                            book now
                        </button>
                    </form>



                </div>
                <div className="lg:flex-1 w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311354.9319222228!2d-73.90534446055965!3d40.78907127120852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2siq!4v1689212917171!5m2!1sar!2siq" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Reservation