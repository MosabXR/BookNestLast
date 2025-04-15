import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "/logo.svg"; // Adjust path as needed

const Register = () => {
  // Formik setup with validation schema
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
      lastName: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      dateOfBirth: Yup.date()
        .required("Date of birth is required")
        .max(new Date(), "Date of birth cannot be in the future")
        .test("age", "You must be at least 13 years old", (value) => {
          const today = new Date();
          const birthDate = new Date(value);
          const age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ) {
            return age - 1 >= 13;
          }
          return age >= 13;
        }),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo and Title */}
        <div className="flex justify-center items-center gap-sm">
          <img
            className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px]"
            src={Logo}
            alt="BookNest Logo"
          />
          <h1 className="text-2xl text-accent-v bg-clip-text text-transparent font-semibold">
            BookNest
          </h1>
        </div>
        <h2 className="text-lg text-accent-v bg-clip-text text-transparent font-semibold text-center">
          Sign Up
        </h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className={`field w-full ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.firstName}
                </p>
              )}
            </div>
            <div className="flex-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={`field w-full ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className={`field w-full ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Date of Birth Field */}
          <div>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              placeholder="Date of Birth"
              className={`field w-full ${
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.dateOfBirth}
              </p>
            )}
          </div>

          {/* Password Fields */}
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={`field w-full ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className={`field w-full ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button type="submit" className="btn btn-accent-v">
              Sign Up
            </button>
            <Link to="/login" className="btn btn-primary-v text-center">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
