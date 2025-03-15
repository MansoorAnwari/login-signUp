import {useFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import "./LoginForm.css"; // Import CSS

const LoginForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("فرمت ایمیل معتبر نیست")
            .required("ایمیل الزامی است"),
        password: Yup.string()
            .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
            .required("رمز عبور الزامی است"),
    });

    const formik = useFormik({
        initialValues: {email: "", password: ""},
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            console.log("فرم ورود ارسال شد: " + JSON.stringify(values));
            resetForm();
        },
    });

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h2 className="login-title">ورود به حساب کاربری</h2>

                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">آدرس ایمیل</label>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@domain.com"
                                className="form-input"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email && (
                            <div className="error-message">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">رمز عبور</label>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                className="form-input"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <div className="error-message">{formik.errors.password}</div>
                        )}
                    </div>

                    <button type="submit" className="submit-btn">
                        ورود به حساب
                    </button>
                </form>

                <div className="signup-link">
                    <Link to="/signup">
                        حساب کاربری ندارید؟ ثبت نام کنید
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;