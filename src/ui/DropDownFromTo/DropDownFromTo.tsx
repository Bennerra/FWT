import { useContext, useState, FC } from "react";
import classNames from "classnames/bind";

import { ThemeContext } from "../../context";
import { addSortingCreated } from "../../store/sortingSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { ReactComponent as ArrowDropDown } from "../../assets/ArrowDropDown.svg";
import OutsideClickHandler from "../../components/OutsideClickHandler";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface DropDownFromToProps {
  title: string;
}

const DropDownFromTo: FC<DropDownFromToProps> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const from = useAppSelector((state) => state.sortings.sortingCreated.from);
  const before = useAppSelector(
    (state) => state.sortings.sortingCreated.before
  );

  const handleOpenSorting = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx("dropdown", `dropdown-${theme}`)}>
      <OutsideClickHandler onOutsideClick={setIsOpen}>
        <div
          className={cx("dropdown__filter", `dropdown__filter-${theme}`, {
            _isOpen: isOpen,
          })}
          onClick={handleOpenSorting}
        >
          <div className={cx("dropdown__title")}>{title}</div>
          <div className={cx("dropdown__arrow", `dropdown__arrow-${theme}`)}>
            <ArrowDropDown />
          </div>
          {isOpen && (
            <div
              className={cx(
                "dropdown__body",
                "dropdown-body",
                `dropdown__body-${theme}`
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                value={from}
                onChange={(e) =>
                  dispatch(addSortingCreated({ from: e.target.value, before }))
                }
                type="text"
                className={cx(
                  "dropdown-body__from",
                  `dropdown-body__from-${theme}`
                )}
                placeholder="from"
              />
              <span
                className={cx(
                  "dropdown-body__line",
                  `dropdown-body__line-${theme}`
                )}
              />
              <input
                value={before}
                onChange={(e) =>
                  dispatch(addSortingCreated({ from, before: e.target.value }))
                }
                type="text"
                className={cx(
                  "dropdown-body__before",
                  `dropdown-body__before-${theme}`
                )}
                placeholder="before"
              />
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropDownFromTo;
