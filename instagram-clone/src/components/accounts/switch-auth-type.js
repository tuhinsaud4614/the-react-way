import { Link } from "react-router-dom";

const SwitchAuthType = ({ to }) => {
  const text =
    to === "Sign Up" ? "Don't have an account?" : "Already have an account?";
  return (
    <div className="md:bg-white md:border py-2.5 flex justify-center items-center">
      <p className="tex-sm my-2.5 mx-4">
        {text} <Link to={`/accounts/${to === "Sign Up"? "register": "login"}`} className="btn-text-primary">{to}</Link>
      </p>
    </div>
  );
};

export default SwitchAuthType;
