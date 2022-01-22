import classNames from "classnames";
import { useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const Input = ({ label, value, secureText, type, touched, valid, ...rest }) => {
  const [focus, setFocus] = useState(false);
  const [hidden, setHidden] = useState(false);

  console.log(focus);

  return (
    <div
      className={classNames(
        "border rounded-sm flex",
        focus && "border-silver-300"
      )}
    >
      <label className="h-9 flex-grow relative">
        <span
          onMouseDown={(e) => e.preventDefault()}
          className={classNames(
            value && "scale-83 -translate-y-2.5 origin-left",
            "text-silver text-xs absolute left-2 right-0 h-9 leading-9"
          )}
        >
          {label}
        </span>
        <input
          {...rest}
          className={classNames(
            "outline-0 w-full flex-grow basis-auto bg-zinc-50 h-9 py-2 pl-2",
            value && "text-xs pt-3.5 pb-0.5 pl-2"
          )}
          value={value}
          type={
            secureText && type === "password"
              ? hidden
                ? "text"
                : "password"
              : type
          }
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </label>
      <div className="flex items-center pr-2 bg-zinc-50">
        {touched &&
          (valid ? (
            <IoIosCheckmarkCircleOutline
              size={24}
              className="text-silver ml-2"
            />
          ) : (
            <IoIosCloseCircleOutline size={24} className="text-red-500 ml-2" />
          ))}
        {secureText && (
          <span
            className="ml-2 cursor-pointer select-none"
            onClick={() => setHidden((prev) => !prev)}
          >
            {hidden ? "Hide" : "Show"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
