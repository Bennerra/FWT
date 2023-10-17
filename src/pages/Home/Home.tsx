import { FC, useMemo, useState } from "react";
import classNames from "classnames/bind";

import {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetPaintingsQuery,
} from "../../store";
import { useAppSelector } from "../../hooks/redux";
import { getCountPages } from "../../utils/getCountPages";

import { CardsList } from "../../components/CardsList";
import { Pagination } from "../../ui/Pagination";
import { Input } from "../../ui/Input";
import { DropDownFromTo } from "../../ui/DropDownFromTo";
import { DropDownSelect } from "../../ui/DropDownSelect";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const LIMIT = 9;

interface HomeProps {
  currentPage: number;
}

const Home: FC<HomeProps> = ({ currentPage }) => {
  const [searchValue, setSearchValue] = useState("");
  const { sorting: sortingAuthorsSorting, id: sortingAuthorsId } =
    useAppSelector((state) => state.sortings.sortingAuthors);
  const { sorting: sortingLocationsSorting, id: sortingLocationId } =
    useAppSelector((state) => state.sortings.sortingLocations);
  const { from, before } = useAppSelector(
    (state) => state.sortings.sortingCreated
  );
  const {
    data: paintingsData,
    isLoading,
    error,
  } = useGetPaintingsQuery({
    _limit: LIMIT,
    _page: currentPage,
    q: searchValue,
    authorId: sortingAuthorsId > 0 ? sortingAuthorsId : undefined,
    locationId: sortingLocationId > 0 ? sortingLocationId : undefined,
    created_gte: from !== "" ? from : undefined,
    created_lte: before !== "" ? before : undefined,
  });
  const { data: authorsData = [] } = useGetAuthorsQuery();
  const { data: locationsData = [] } = useGetLocationsQuery();
  const [isOpenAuthor, setIsOpenAuthor] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);

  const totalCount = paintingsData?.totalCount || 0;

  const pages = useMemo(() => getCountPages(totalCount, LIMIT), [totalCount]);

  if (error) {
    // eslint-disable-next-line
    console.log(error);
  }

  return (
    <div className={cx("home")}>
      {isLoading ? (
        <div className={cx("loading")}>Loading...</div>
      ) : (
        <>
          <section className={cx("home__filters")}>
            <Input
              placeholder="Name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <DropDownSelect
              name="name"
              title="Author"
              listArr={authorsData}
              isOpen={isOpenAuthor}
              setIsOpen={setIsOpenAuthor}
              sorting={sortingAuthorsSorting}
            />
            <DropDownSelect
              name="location"
              title="Location"
              listArr={locationsData}
              isOpen={isOpenLocation}
              setIsOpen={setIsOpenLocation}
              sorting={sortingLocationsSorting}
            />
            <DropDownFromTo title="Created" />
          </section>
          <section className={cx("home__cards")}>
            <CardsList
              authorsData={authorsData}
              locationsData={locationsData}
              paintingsData={paintingsData?.data || []}
            />
          </section>
          {paintingsData && paintingsData?.data.length > 0 ? (
            <section className={cx("home__pagination")}>
              <Pagination totalPages={pages} currentPage={currentPage} />
            </section>
          ) : (
            <div className={cx("not-found")}>Картины не найдены!</div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
