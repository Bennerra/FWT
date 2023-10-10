import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Theme } from "../../assets/theme.svg";

import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

const cx = classNames.bind(styles);

const Header: FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  if (theme === "dark") {
    document.body.classList.add("_dark");
  } else {
    document.body.classList.remove("_dark");
  }

  return (
    <header className={cx("header")}>
      <div className={cx("header__logo")}>
        <Logo />
      </div>
      <button
        type="button"
        className={cx("header__theme", {
          _dark: theme === "dark",
        })}
        onClick={() => toggleTheme()}
      >
        <Theme />
      </button>
    </header>
  );
};

export default Header;
