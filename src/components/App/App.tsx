import { FC, useContext } from "react";
import classNames from "classnames/bind";
import { BrowserRouter as Router } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { ThemeContext } from "../../context";

import { Header } from "../Header";
import { Home } from "../../pages/Home";
import { ScrollToTop } from "../ScrollToTop";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const App: FC = () => {
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={cx("app", `app-${theme}`)}>
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
