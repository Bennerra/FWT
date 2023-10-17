import { FC, useContext } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "../../context";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Theme } from "../../assets/theme.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Header: FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className={cx("header", `header-${theme}`)}>
      <div className={cx("header__logo")}>
        <Logo />
      </div>
      <button
        type="button"
        className={cx("header__theme", `header-${theme}`)}
        onClick={() => toggleTheme()}
      >
        <Theme />
      </button>
    </header>
  );
};

export default Header;
