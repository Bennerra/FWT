import { FC, useEffect, useRef } from "react";

interface OutsideClickHandlerProps {
  onOutsideClick: (value: boolean) => void;
  children?: React.ReactNode;
}

const OutsideClickHandler: FC<OutsideClickHandlerProps> = ({
  onOutsideClick,
  children,
}) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
        onOutsideClick(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;
