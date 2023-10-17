import { FC, InputHTMLAttributes, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "../../context";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<any> {
  placeholder: string;
}

const Input: FC<InputProps> = ({ placeholder, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <input
      {...props}
      type="text"
      placeholder={placeholder}
      className={cx("input", `input-${theme}`)}
    />
  );
};

export default Input;
