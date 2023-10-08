import { FC, useEffect } from "react";

interface ScrollToTopProps {
  currentPage: number;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ currentPage }) => {
  useEffect(() => window.scrollTo(0, 0), [currentPage]);

  return null;
};

export default ScrollToTop;
