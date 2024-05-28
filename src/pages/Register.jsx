import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState();
  const { userRegister } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const terms = e.target.terms.checked;
    const password = e.target.password.value;

    const data = { name, email, terms, password };
    console.log(data);

    userRegister(email, password);
  };

  return (
    <div className="hero my-10">
      <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
        <h1 className="text-4xl mt-5 font-bold text-center">
          {" "}
          Create Account Now
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? "test" : "password"}
                  placeholder="password"
                  className=" w-full input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-12 right-5"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-2xl"></FaEyeSlash>
                  ) : (
                    <FaEye className="text-2xl"></FaEye>
                  )}
                </span>
              </div>

              <div className="mt-3">
                <input className="" type="checkbox" name="terms" id="terms" />
                <label className="ms-3" htmlFor="terms">
                  Accept our Terms and Condition
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="mt-5">
            Already have an account? Please <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
