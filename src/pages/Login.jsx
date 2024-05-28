import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { userLogin } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    userLogin(email, password);
  };

  return (
    <div className="hero my-10">
      <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
        <h1 className="text-4xl mt-5 font-bold text-center">
          {" "}
          Please Login now
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
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
              <div className="">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className=" w-full input input-bordered"
                  required
                />
              </div>

              <label className="label mt-3">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-xl font-bold text-white">
                Login
              </button>
            </div>
          </form>

          <p className="mt-5">
            Are you new here? Please <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
