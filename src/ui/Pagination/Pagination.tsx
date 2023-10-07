import { FC } from "react";

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
  changeNextPage,
  changePrevPage,
} from "../../store/paginationSlice";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

const cx = classNames.bind(styles);

const PAGE_DOUBLE = 2;
const PAGE = 1;

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, totalCount }) => {
  const pages = usePagination(totalPages);
  const dispatch = useAppDispatch();

  return (
    <div className={cx("pagination")}>
      <div className={cx("pagination__arrow-double")} onClick={() => dispatch(changePrevPage(2))}>
        <ArrowPrevDouble />
      </div>
      <div className={cx("pagination__arrow")} onClick={() => dispatch(changePrevPage(1))}>
        <ArrowPrev />
      </div>
      {pages.map((page, index) => (
        <div
          key={index}
          className={cx("pagination__page", {
            _current: currentPage === page,
          })}
          onClick={() => dispatch(changeCurrentPage(page))}
        >
          {page}
        </div>
      ))}
      <div className={cx("pagination__arrow")}  onClick={() => dispatch(changeNextPage({totalPages, nextCount: PAGE}))} >
        <ArrowNext />
      </div>
      <div className={cx("pagination__arrow-double")} onClick={() => dispatch(changeNextPage({totalPages, nextCount: PAGE_DOUBLE}))}>
        <ArrowNextDouble />
      </div>
    </div>
  );
};

export default Pagination;
