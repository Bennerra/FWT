import { FC, useMemo, useState } from "react";

import classNames from "classnames/bind";
import {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetPaintingsQuery,
} from "../../store";
import { CardsList } from "../../components/CardsList";
import { Pagination } from "../../ui/Pagination";
import { DropDown } from "../../ui/DropDown";
import { getCountPages } from "../../utils/getCountPages";

import styles from "./styles.module.scss";
import { Input } from "../../ui/Input";
import { useAppSelector } from "../../hooks/redux";

const cx = classNames.bind(styles);

const LIMIT = 9;

interface HomeProps {
  currentPage: number;
}

const Home: FC<HomeProps> = ({ currentPage }) => {
  const [filterValue, setFilterValue] = useState("");
  const sortingId = useAppSelector((state) => state.addSorting.id);
  // const sorting = useAppSelector((state) => state.addSorting.sorting);
  const { data: paintingsData, isLoading } = useGetPaintingsQuery({
    _limit: LIMIT,
    _page: currentPage,
    q: filterValue,
    authorId: sortingId > 0 ? sortingId : undefined,
  });
  const { data: authorsData = [] } = useGetAuthorsQuery();
  const { data: locationsData = [] } = useGetLocationsQuery();

  const totalCount = paintingsData?.totalCount || 0;

  const pages = useMemo(() => getCountPages(totalCount, LIMIT), [totalCount]);

  return (
    <div className={cx("home")}>
      {isLoading ? (
        <div className={cx("loading")}>Loading...</div>
      ) : (
        <>
          <section className={cx("home__filters")}>
            <Input
              placeholder="Name"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
            <DropDown title="Author" listArr={authorsData} />
            <Input placeholder="Name" />
            <Input placeholder="Name" />
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
