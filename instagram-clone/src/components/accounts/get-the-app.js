import appStore from "../../assets/app-store.png";
import playStore from "../../assets/play-store.png";

const GetTheApp = () => {
  return (
    <div className="mt-25">
      <p className="text-center text-sm py-2.5 px-5">Get the app.</p>
      <div className="flex justify-center py-2.5">
        <a
          target="_blank"
          rel="noreferrer"
          className="mr-2"
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
        >
          <img
            src={appStore}
            alt="Available on the App Store"
            width={136}
            height={40}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="mr-2"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D075A1F3A-24F5-4DD8-B19E-416860074DE0%26utm_content%3Dlo%26utm_medium%3Dbadge"
        >
          <img
            src={playStore}
            alt="Available on the Play Store"
            width={136}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default GetTheApp;
