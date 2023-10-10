import { FC, useMemo } from "react";

import classNames from "classnames/bind";
import {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetPaintingsQuery,
} from "../../store";
import { CardsList } from "../../components/CardsList";
import { Pagination } from "../../ui/Pagination";
import { getCountPages } from "../../utils/getCountPages";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const LIMIT = 9;

interface HomeProps {
  currentPage: number;
}

const Home: FC<HomeProps> = ({ currentPage }) => {
  const { data: paintingsData, isLoading } = useGetPaintingsQuery({
    _limit: LIMIT,
    _page: currentPage,
  });
  const { data: authorsData = [] } = useGetAuthorsQuery();
  const { data: locationsData = [] } = useGetLocationsQuery();

  const totalCount = paintingsData?.totalCount || 0;

  const pages = useMemo(() => getCountPages(totalCount, LIMIT), [totalCount]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("home")}>
      <div className={cx("home__cards")}>
        <CardsList
          authorsData={authorsData}
          locationsData={locationsData}
          paintingsData={paintingsData?.data || []}
        />
      </div>
      <div className={cx("home__pagination")}>
        <Pagination totalPages={pages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
