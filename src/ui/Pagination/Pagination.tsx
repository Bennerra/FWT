import { FC, useContext } from "react";

import classNames from "classnames/bind";
import { ReactComponent as ArrowPrevDouble } from "../../assets/ArrowPrevDouble.svg";
import { ReactComponent as ArrowPrev } from "../../assets/ArrowPrev.svg";
import { ReactComponent as ArrowNextDouble } from "../../assets/ArrowNextDouble.svg";
import { ReactComponent as ArrowNext } from "../../assets/ArrowNext.svg";

import styles from "./styles.module.scss";
import { usePagination } from "../../hooks/usePagination";
import { useAppDispatch } from "../../hooks/redux";
import {
  changeCurrentPage,
  changeNextDoublePage,
  changeNextPage,
  changePrevDoublePage,
  changePrevPage,
} from "../../store/paginationSlice";
import { ThemeContext } from "../../context/ThemeContext";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const cx = classNames.bind(styles);

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const pages = usePagination(totalPages, currentPage);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cx("pagination")}>
      <button
        type="button"
        className={cx("pagination__arrow-double", {
          _disabled: currentPage === 1,
          _dark: theme === "dark",
        })}
        onClick={() => dispatch(changePrevDoublePage())}
      >
        <ArrowPrevDouble />
      </button>
      <button
        type="button"
        className={cx("pagination__arrow", {
          _disabled: currentPage === 1,
          _dark: theme === "dark",
        })}
        onClick={() => dispatch(changePrevPage())}
      >
        <ArrowPrev />
      </button>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={cx("pagination__page", {
            _current: currentPage === page,
            _dark: theme === "dark",
          })}
          onClick={() => dispatch(changeCurrentPage(page))}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={cx("pagination__arrow", {
          _disabled: currentPage === totalPages,
          _dark: theme === "dark",
        })}
        onClick={() => dispatch(changeNextPage(totalPages))}
      >
        <ArrowNext />
      </button>
      <button
        type="button"
        className={cx("pagination__arrow-double", {
          _disabled: currentPage === totalPages,
          _dark: theme === "dark",
        })}
        onClick={() => dispatch(changeNextDoublePage(totalPages))}
      >
        <ArrowNextDouble />
      </button>
    </div>
  );
};

export default Pagination;
