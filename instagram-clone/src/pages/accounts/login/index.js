import classNames from "classnames";
import styles from "./index.module.css";
import loginImage from "../../../assets/login-image.png";
import Slide from "../../../components/accounts/login/slide";
import slide1 from "../../../assets/slide-1.jpg";
import slide2 from "../../../assets/slide-2.jpg";
import slide3 from "../../../assets/slide-3.jpg";
import slide4 from "../../../assets/slide-4.jpg";
import slide5 from "../../../assets/slide-5.jpg";
import slide6 from "../../../assets/slide-6.jpg";
import { LoginForm } from "../../../components/accounts/login";
import SwitchAuthType from "../../../components/accounts/switch-auth-type";
import GetTheApp from "../../../components/accounts/get-the-app";

const LoginPage = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <main className="flex flex-col flex-grow bg-zinc-50">
        <section className="flex max-w-screen-lg mx-auto md:mt-8">
          <div className={classNames(styles.Left)}>
            <div className={classNames("relative", styles.LeftWrapper)}>
              <img
                src={loginImage}
                alt="Login Slider"
                width={454}
                height={618}
                className="w-full h-full"
              />
              <div className="absolute inset-0">
                <Slide
                  images={[slide1, slide2, slide3, slide4, slide5, slide6]}
                />
              </div>
            </div>
          </div>
          {/* Right */}
          <div
            className={classNames(
              "flex flex-col flex-grow justify-center mt-3",
              styles.Right
            )}
          >
            <LoginForm />
            <SwitchAuthType to="Sign Up" />
            <GetTheApp />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
