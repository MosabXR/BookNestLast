import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "/logo.svg"; // Adjust path as needed

const Login = () => {
  // Formik setup with validation schema
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
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
          Sign In
        </h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
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

          {/* Password Field */}
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

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button type="submit" className="btn btn-accent-v">
              Sign In
            </button>
            <Link to="/register" className="btn btn-primary-v text-center">
              Create Account
            </Link>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-center">Forgot Password?</p>
          <Link to="/resetpassword" className="btn text-sm">
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
