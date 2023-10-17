import { Dispatch, SetStateAction, useContext } from "react";
import classNames from "classnames/bind";

import { useAppDispatch } from "../../hooks/redux";
import {
  addSortingAuthors,
  addSortingLocations,
  deleteSorting,
} from "../../store/sortingSlice";
import { ThemeContext } from "../../context";

import OutsideClickHandler from "../../components/OutsideClickHandler";
import { ReactComponent as ArrowDropDown } from "../../assets/ArrowDropDown.svg";
import { ReactComponent as DeleteSorting } from "../../assets/DeleteSorting.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface DropDownProps<T> {
  name: string;
  title: string;
  listArr: T;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  sorting: string;
}

const DropDownSelect = <T extends Record<string, any>>({
  name,
  title,
  listArr,
  isOpen,
  setIsOpen,
  sorting,
}: DropDownProps<T>) => {
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  const handleOpenSorting = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteSorting = () => {
    if (name === "name") {
      dispatch(deleteSorting("sortingAuthors"));
    }
    if (name === "location") {
      dispatch(deleteSorting("sortingLocations"));
    }
  };
  const handleOptionClick = (item: T) => {
    const sortingBody = { sorting: item[name], id: item.id };

    if (name === "name") {
      dispatch(addSortingAuthors(sortingBody));
    }
    if (name === "location") {
      dispatch(addSortingLocations(sortingBody));
    }
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
          <div className={cx("dropdown__title")}>{sorting || title}</div>
          <div className={cx("dropdown__direction")}>
            {sorting && (
              <button
                type="button"
                className={cx("dropdown__delete", `dropdown__delete-${theme}`)}
                onClick={handleDeleteSorting}
              >
                <DeleteSorting />
              </button>
            )}
            <div className={cx("dropdown__arrow", `dropdown__arrow-${theme}`)}>
              <ArrowDropDown />
            </div>
          </div>
          {isOpen && (
            <div className={cx("dropdown__body", `dropdown__body-${theme}`)}>
              <ul className={cx("dropdown__list", `dropdown__list-${theme}`)}>
                {listArr.map((item: T) => (
                  <li
                    key={item.id}
                    className={cx(
                      "dropdown-list__item",
                      `dropdown-list__item-${theme}`
                    )}
                    onClick={() => handleOptionClick(item)}
                  >
                    {"name" in item ? item.name : item.location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DropDownSelect;
