import * as Yup from 'yup';
import { useFormik } from 'formik';


function BasicForm() {
    const formValidationSchema = Yup.object({
        email: Yup.string()
        .required("Pls fill email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Not a Valid Email"),
        password: Yup.string().min(8, "Min 8 char").max(12, "max 12 char")
    })
    const validateForm = (values) => {
        console.log("validate", values);
        const errors = {}

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i. test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if(values.password.length < 8 ){
            errors.password = "Please password min 8 char"
        }if(values.password.length > 12){
            errors.password = "Pls add keep pass max 12 char"
        }

        console.log(errors);
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: formValidationSchema,
        // validate: validateForm,
        onSubmit : (values) => {
            console.log("onSubmit", values);
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <input value={formik.values.email} type="email" name="email" placeholder="Email" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email
             ? formik.errors.email
             : ""
            }
            <br />            
            <input value={formik.values.password} type="password" name="password" placeholder="Password" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />  
            {formik.errors.password && formik.touched.password
             ? formik.errors.password
             : ""
            }
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default BasicForm;