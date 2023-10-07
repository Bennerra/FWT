import React, { FC } from "react";

import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface CardProps {
  imageUrl: string;
  title: string;
  year: string;
  author: string;
  location: string;
}

const Card: FC<CardProps> = ({ imageUrl, title, year, author, location }) => {
  return (
    <div className={cx("card")}>
      <img
        className={cx("card__image")}
        src={`https://test-front.framework.team${imageUrl}`}
        alt=""
      />
      <div className={cx("card__bottom")}>
        <h6 className={cx("card__title")}>{title}</h6>
        <div className={cx("card__info", "card-info")}>
          {author && (
            <div className={cx("card-info__item")}>
              <span>Author:</span>
              {author}
            </div>
          )}
          <div className={cx("card-info__item")}>
            <span>Created:</span>
            {year}
          </div>
          {location && (
            <div className={cx("card-info__item")}>
              <span>Location:</span>
              {location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
