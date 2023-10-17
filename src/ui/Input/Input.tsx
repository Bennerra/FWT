import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<any> {
  placeholder: string;
  theme: string;
}

const Input: FC<InputProps> = ({ placeholder, theme, ...props }) => (
  <input
    {...props}
    type="text"
    placeholder={placeholder}
    className={cx("input", `input-${theme}`)}
  />
);

export default Input;
