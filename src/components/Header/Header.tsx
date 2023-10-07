import { FC } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as DarkSun } from "../../assets/dark-sun.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Header: FC = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("header__logo")}>
        <Logo />
      </div>
      <div className={cx("header__theme")}>
        <DarkSun />
      </div>
    </header>
  );
};

export default Header;
