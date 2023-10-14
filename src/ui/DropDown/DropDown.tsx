import { FC, useContext, useState } from "react";
import classNames from "classnames/bind";
import { ReactComponent as ArrowDropDown } from "../../assets/ArrowDropDown.svg";
import { ReactComponent as DeleteSorting } from "../../assets/DeleteSorting.svg";

import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addSorting, deleteSorting } from "../../store/sortingSlice";
import { ThemeContext } from "../../context";

const cx = classNames.bind(styles);

export interface IListItem {
  id: number;
  name: string;
}

interface DropDownProps {
  title: string;
  listArr: IListItem[];
}

const DropDown: FC<DropDownProps> = ({ title, listArr }) => {
  const dispatch = useAppDispatch();
  const sorting = useAppSelector((state) => state.addSorting.sorting);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleOpenSorting = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteSorting = () => {
    dispatch(deleteSorting());
  };

  return (
    <div className={cx("dropdown", `dropdown-${theme}`)}>
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
              {listArr.map((item) => (
                <li
                  key={item.id}
                  className={cx(
                    "dropdown-list__item",
                    `dropdown-list__item-${theme}`
                  )}
                  onClick={() =>
                    dispatch(addSorting({ sorting: item.name, id: item.id }))
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
