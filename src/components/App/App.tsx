import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import classNames from "classnames/bind";
import { Home } from "../../pages/Home";
import { Header } from "../Header";

import styles from "./styles.module.scss";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { useAppSelector } from "../../hooks/redux";

const cx = classNames.bind(styles);

const App: FC = () => {
  const currentPage = useAppSelector((state) => state.currentPage.currentPage);
  return (
    <Router>
      <div className={cx("App")}>
        <div className={cx("container")}>
          <ScrollToTop currentPage={currentPage} />
          <Header />
          <Home currentPage={currentPage} />
        </div>
      </div>
    </Router>
  );
};
export default App;
