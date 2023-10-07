import { FC } from "react";
import classNames from "classnames/bind";

import { IPainting } from "../../models/IPainting";
import { IAuthor } from "../../models/IAuthor";
import { ILocation } from "../../models/ILocation";

import { Card } from "../../ui/Card";

import styles from "./styles.module.scss";

interface CardsListProps {
  authorsData: IAuthor[];
  locationsData: ILocation[];
  paintingsData: IPainting[];
}

const cx = classNames.bind(styles);

const CardsList: FC<CardsListProps> = ({
  authorsData,
  locationsData,
  paintingsData,
}) => {
  const getAuthorName = (id: number): string => {
    const author = authorsData.find((el) => el.id === id);
    return author?.name || "";
  };

  const getLocation = (id: number): string => {
    const location = locationsData.find((el) => el.id === id);
    return location?.location || "";
  };

  return (
    <div className={cx("cards")}>
      {paintingsData.map((painting: IPainting) => (
        <Card
          imageUrl={painting.imageUrl}
          title={painting.name}
          year={painting.created}
          key={painting.id}
          author={getAuthorName(painting.id)}
          location={getLocation(painting.id)}
        />
      ))}
    </div>
  );
};

export default CardsList;
