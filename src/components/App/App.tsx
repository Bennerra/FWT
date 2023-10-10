import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import classNames from "classnames/bind";
import { Home } from "../../pages/Home";
import { Header } from "../Header";

import styles from "./styles.module.scss";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { useAppSelector } from "../../hooks/redux";
import { ThemeContext } from "../../context/ThemeContext";
import { getStorageValue } from "../../utils/getStorageValue";

const cx = classNames.bind(styles);

const App: FC = () => {
  const currentPage = useAppSelector((state) => state.currentPage.currentPage);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentStorageTheme = getStorageValue("theme", "light");
    setTheme(currentStorageTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  }, [theme]);

  const contextValue = useMemo(
    () => ({ toggleTheme, theme }),
    [toggleTheme, theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <Router>
        <div className={cx("App")}>
          <div className={cx("container")}>
            <ScrollToTop currentPage={currentPage} />
            <Header />
            <Home currentPage={currentPage} />
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};
export default App;
