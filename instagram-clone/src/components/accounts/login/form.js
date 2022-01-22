import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import Input from "../../ui/input";
import AccountFormHeader from "../account-form-header";
import OrDivider from "../or-divider";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="accounts-form-container w-full pt-2.5 mb-2.5">
      <AccountFormHeader />
      <div className="flex flex-col w-full mb-2.5">
        <form className="mt-6">
          <div className="mx-10 mb-1.5">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Phone number, username, or email"
            />
          </div>
          <div className="mx-10 mb-1.5">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              secureText
              touched
              valid
            />
          </div>
          <div className="mx-10 mt-4">
            <button type="submit" className="btn-primary block w-full">
              Log In
            </button>
          </div>
          <OrDivider />
          <div className="mx-10 mt-2">
            <button
              type="button"
              className="flex justify-center items-center w-full active:opacity-70"
            >
              <IoLogoFacebook size={20} className="mr-1 text-fb" />
              <span className="text-fb text-sm font-semibold">
                Log in with Facebook
              </span>
            </button>
          </div>
          <Link
            to="forgot-password"
            className="block mt-5 mb-2 text-my-blue-100 text-center text-xs active:opacity-50"
          >
            Forgot password?
          </Link>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
