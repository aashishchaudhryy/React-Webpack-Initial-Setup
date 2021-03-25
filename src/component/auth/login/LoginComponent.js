import React from "react";
import { Formik } from 'formik';
import classes from '../login/Login.module.css';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const LoginComponent = props => {

    function substract(a,b) {
        return a-b;
    }

    return (
        <React.Fragment>
            <div className={classes.limiter}>
                <div className={classes.container}>
                    <div className={classes.wraplogin}>
                        <div className={classes.loginform}>
                            <span className={classes.loginformtitle}>Login</span>
                            <Formik
                                initialValues={{ email: "", password: "", isProduction: false }}
                                onSubmit={(values) => {
                                    alert(substract(2, 3));
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email()
                                        .required("please enter your email"),
                                    password: Yup.string()
                                        .required("please enter your password")
                                        .min(4, "Password is too short - should be 4 chars minimum.")
                                        .matches(/(?=.*[0-9])/, "Password must contain a number.")
                                })}
                            >
                                {formikProps => {
                                    const { values, touched, errors, handleChange, handleBlur, handleSubmit } = formikProps;
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <div className={classes.wrapinput}>
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    name="email"
                                                    type="text"
                                                    placeholder="Enter your email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={[classes.inputBox, (errors.email && touched.email) ? classes.error : ''].join(' ')} />

                                                {errors.email && touched.email && (
                                                    <div className={classes.inputFeedback}>{errors.email}</div>
                                                )}
                                            </div>

                                            <div className={classes.wrapinput}>
                                                <label htmlFor="email">Password</label>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={[classes.inputBox, (errors.password && touched.password) ? classes.error : ''].join(' ')}
                                                />
                                                {errors.password && touched.password && (
                                                    <div className={classes.inputFeedback}>{errors.password}</div>
                                                )}
                                            </div>
                                            <div>
                                                <button type="submit">
                                                    Login </button>
                                            </div>
                                            <div className={classes.registerSocial}>
                                                <span className={classes.signUp}>Or Sign Up using</span>
                                            </div>

                                            <div className={classes.socialMedia}>
                                                <a href="#" className={[classes.loginsocial, classes.bg1].join(' ')}>
                                                    <i className="fa fa-facebook"></i>
                                                </a>

                                                <a href="#" className={[classes.loginsocial, classes.bg2].join(' ')}>
                                                    <i className="fa fa-twitter"></i>
                                                </a>

                                                <a href="#" className={[classes.loginsocial, classes.bg3].join(' ')}>
                                                    <i className="fa fa-google"></i>
                                                </a>
                                            </div>

                                            <div className={classes.registerSocial}>
                                                <span className={classes.signUp}>Or Sign Up using</span>
                                            </div>

                                            <div style={{ textAlign: "center" }}>
                                                <Link className={classes.signUp} to="/register">Create New Account</Link>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginComponent;