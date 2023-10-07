import { FC } from "react";

import classNames from "classnames/bind";
import { Home } from "../../pages/Home";
import { Header } from "../Header";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => {
  return (
    <div className={cx("App")}>
      <div className={cx("container")}>
        <Header />
        <Home />
      </div>
    </div>
  );
};
export default App;
