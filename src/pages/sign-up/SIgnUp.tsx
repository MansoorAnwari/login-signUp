import {useFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import "./SignupForm.css";

const SignupForm = () => {
    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
            .max(50, "نام کاربری نباید بیشتر از ۵۰ کاراکتر باشد")
            .required("نام کاربری الزامی است"),
        email: Yup.string()
            .email("فرمت ایمیل معتبر نیست")
            .required("ایمیل الزامی است"),
        password: Yup.string()
            .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
            .required("رمز عبور الزامی است"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "رمز عبور باید مطابقت داشته باشد")
            .required("تکرار رمز عبور الزامی است"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            alert("فرم ثبت نام ارسال شد: " + JSON.stringify(values));
            resetForm();
        },
    });

    return (
        <div className="signup-container">
            <div className="signup-form-wrapper">
                <h2 className="signup-title">ثبت نام</h2>

                <form onSubmit={formik.handleSubmit}>
                    {/* نام کاربری */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="username">
                            نام کاربری
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="نام کاربری خود را وارد کنید"
                                className="form-input"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.username && formik.errors.username && (
                            <div className="error-message">{formik.errors.username}</div>
                        )}
                    </div>

                    {/* ایمیل */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            آدرس ایمیل
                        </label>
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

                    {/* رمز عبور */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            رمز عبور
                        </label>
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

                    {/* تکرار رمز عبور */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirmPassword">
                            تکرار رمز عبور
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="••••••••"
                                className="form-input"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <div className="error-message">{formik.errors.confirmPassword}</div>
                        )}
                    </div>

                    <button type="submit" className="submit-btn">
                        ثبت نام
                    </button>
                </form>

                <div className="login-link">
                    <Link to="/login">
                        قبلاً ثبت نام کرده‌اید؟ ورود
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;