import { useEffect, useRef, useState } from "react";
import { ArhivaFilterBtnsProps, YearDocProps } from "src/interfaces/Archive";
import { useRouter } from "next/router";
import {
  AccessibilityState,
  HoverColorsType,
} from "src/interfaces/HomePageInterfaces";
import SwiperCore, { Swiper } from "swiper";
import { SwiperControls } from "src/interfaces/Projects";
import { NewsletterPageProps } from "src/interfaces/NewsletterPage";
import { NewsItem } from "src/interfaces/MonthNewsPage";
import { EShopProductProps } from "src/interfaces/EShop";
import { RefObject } from "react";

//.......... HomePage/Najnovi Vesti- Scroll for the Projects.................

export const useScrollHandler = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false);
  const [startScrollbarX, setStartScrollbarX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (cardsWrapperRef.current) {
      setStartX(e.pageX - cardsWrapperRef.current.offsetLeft);
      setScrollLeft(cardsWrapperRef.current.scrollLeft);
    }
  };

  const handleScrollbarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingScrollbar(true);
    setStartScrollbarX(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !cardsWrapperRef.current || !scrollbarRef.current)
      return;
    e.preventDefault();

    const x = e.pageX - cardsWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    cardsWrapperRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleScrollbarMouseMove = (e: MouseEvent) => {
    if (
      !isDraggingScrollbar ||
      !cardsWrapperRef.current ||
      !scrollbarRef.current
    )
      return;

    const deltaX = e.clientX - startScrollbarX;
    const scrollbarWidth = scrollbarRef.current.offsetWidth;
    const wrapperWidth = cardsWrapperRef.current.offsetWidth;
    const scrollableWidth = cardsWrapperRef.current.scrollWidth - wrapperWidth;

    const scrollX = (deltaX / scrollbarWidth) * scrollableWidth;
    cardsWrapperRef.current.scrollLeft += scrollX;

    setStartScrollbarX(e.clientX);
  };

  const handleScrollbarMouseUp = () => {
    setIsDraggingScrollbar(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (cardsWrapperRef.current && scrollbarRef.current) {
      const wrapperWidth = cardsWrapperRef.current.offsetWidth;
      const scrollbarWidth = scrollbarRef.current.offsetWidth;
      const maxScroll = wrapperWidth - scrollbarWidth;
      const scrollPercentage =
        (cardsWrapperRef.current.scrollLeft /
          (cardsWrapperRef.current.scrollWidth - wrapperWidth)) *
        100;

      const limitedScrollPercentage = Math.min(
        Math.max(scrollPercentage, -100),
        100
      );
      const limitedScrollLeft =
        (limitedScrollPercentage / 100) * (maxScroll - 400) + 200;
      scrollbarRef.current.style.left = `${limitedScrollLeft}px`;
    }
  };

  useEffect(() => {
    const scrollHandler = () => handleScroll();
    document.addEventListener("mousemove", handleScrollbarMouseMove);
    document.addEventListener("mouseup", handleScrollbarMouseUp);

    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (cardsWrapperRef.current) {
        cardsWrapperRef.current.removeEventListener("scroll", scrollHandler);
      }
      document.removeEventListener("mousemove", handleScrollbarMouseMove);
      document.removeEventListener("mouseup", handleScrollbarMouseUp);
    };
  }, [handleScrollbarMouseMove, handleScrollbarMouseUp]);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    cardsWrapperRef,
    scrollbarRef,
    handleScrollbarMouseDown,
  };
};

// ...........................Accessibillity...................................................

export const accessibillitySyle = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setClickedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });

    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return {
    handleClick,
    setHoveredIndex,
    activeIndexes,
    hoveredIndex,
    clickedIndexes,
  };
};

// ..................Accessibillity Btn............................................

export const showAccessibility = (
  setAccessibilityState: React.Dispatch<
    React.SetStateAction<AccessibilityState>
  >
) => {
  const handlePristapnostBtnClick = () => {
    setAccessibilityState((prevState: AccessibilityState) => ({
      ...prevState,
      isPristapnostBtnVisible: false,
      isPristapnostVisible: true,
    }));
  };

  const handlePristapnostMouseOver = () => {
    setAccessibilityState((prevState: AccessibilityState) => ({
      ...prevState,
      isPristapnostVisible: false,
      isPristapnostBtnVisible: true,
    }));
  };

  return {
    handlePristapnostBtnClick,
    handlePristapnostMouseOver,
  };
};

//.........The same Projects Component/ without scrollbar/ Dragging the Projects with the mouse.....

export const ProjectsScrollHandle = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (cardsWrapperRef.current) {
      setStartX(e.pageX - cardsWrapperRef.current.offsetLeft);
      setScrollLeft(cardsWrapperRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !cardsWrapperRef.current) return;
    e.preventDefault();

    const x = e.pageX - cardsWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    cardsWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (cardsWrapperRef.current) {
        setScrollLeft(cardsWrapperRef.current.scrollLeft);
      }
    };

    const scrollHandler = () => handleScroll();

    if (cardsWrapperRef.current) {
      cardsWrapperRef.current.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (cardsWrapperRef.current) {
        cardsWrapperRef.current.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    cardsWrapperRef,
  };
};

// ............Same Btn Component different bg-color and hover...............

export function useHoverBackgroundColor(
  color: string,
  hoverColors: HoverColorsType
) {
  const initialBgColor = hoverColors[color] || "";
  const [bgColor, setBgColor] = useState<string>(initialBgColor);

  const handleMouseOver = () => setBgColor(hoverColors[color] || "");
  const handleMouseOut = () => setBgColor("");

  return { bgColor, handleMouseOver, handleMouseOut };
}

//............... Member Swiper...............................

export function useActiveSwiper(initialState = 0, itemsCount = 3) {
  const [active, setActive] = useState(initialState);

  const handleNext = () => {
    setActive((prevActive) => (prevActive + 1) % itemsCount);
  };

  const handlePrev = () => {
    setActive((prevActive) => (prevActive - 1 + itemsCount) % itemsCount);
  };

  return { active, handleNext, handlePrev };
}

// ..............Arhive Filters...................
export const useArhivaFilter = ({
  godishni_izveshtai,
  finansiski_izvestai,
  politicki_dokumenti,
}: ArhivaFilterBtnsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredData, setFilteredData] = useState<YearDocProps[]>([]);

  useEffect(() => {
    activeArray(activeIndex);
  }, [activeIndex]);

  const handleActiveClass = (index: number) => {
    setActiveIndex(index);
  };

  const activeArray = (index: number) => {
    switch (index) {
      case 0:
        setFilteredData(godishni_izveshtai);
        break;
      case 1:
        setFilteredData(finansiski_izvestai);
        break;
      case 2:
        setFilteredData(politicki_dokumenti);
        break;
      default:
        setFilteredData([]);
        break;
    }
  };

  return { activeIndex, filteredData, handleActiveClass };
};

//.........Show more or less Documents.............

export interface Document {
  id: string;
  title: string;
}
export const useDocumentVisibility = (documents: Document[]) => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIcons, setHoveredIcons] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleIconHover = (id: string, isHovered: boolean) => {
    setHoveredIcons((prevIcons) => ({ ...prevIcons, [id]: isHovered }));
  };

  const visibleDocuments = showAll ? documents : documents.slice(0, 4);

  return {
    showAll,
    setShowAll,
    hoveredIcons,
    handleIconHover,
    visibleDocuments,
  };
};

//............ Services active...................

export const useServiceInfo = (initialIndex = 0) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const router = useRouter();

  useEffect(() => {
    const queryIndex = parseInt(String(router.query.q)?.replace("u-", ""), 10);
    setActiveIndex(isNaN(queryIndex) ? initialIndex : queryIndex);
  }, [router.query.q, initialIndex]);

  const handleActiveClass = (index: number) => {
    setActiveIndex(index);
  };

  return { activeIndex, handleActiveClass };
};

// ................Projects Carousel.............

export function useSwiperControls(): SwiperControls {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return { swiper, setSwiper, handlePrev, handleNext };
}

//...............Sorting the News....................

export const useSortedNewsletterData = (
  newsletterPageData: NewsletterPageProps[]
) => {
  const [sortedData, setSortedData] = useState<NewsletterPageProps[]>([]);

  const getDateFromMonthYear = (monthYearString: string): Date => {
    const [month, year] = monthYearString.split("/");
    return new Date(`${year}-${month}-01T00:00:00`);
  };

  useEffect(() => {
    const sorted = [...newsletterPageData].sort((a, b) => {
      const dateA = getDateFromMonthYear(a.date);
      const dateB = getDateFromMonthYear(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    setSortedData(sorted);
  }, [newsletterPageData]);

  return sortedData;
};

// ...........Pagination for the News...............

export const useOstanatiNovostiPagination = (
  ostanatiNovosti: NewsItem[],
  itemsPerPage: number = 6
) => {
  const router = useRouter();
  const asPath = router.asPath.split("/")[2];

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNews = ostanatiNovosti.slice(startIndex, endIndex);

  const totalPages = Math.ceil(ostanatiNovosti.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return { asPath, displayedNews, totalPages, handlePageChange };
};

// ............Mark the Product as a Favourite........

export const useProductHeartToggle = () => {
  const [heartSrc, setHeartSrc] = useState("/images/eShop/heartWhite.svg");
  const [bgColor, setBgColor] = useState("");

  const toggleHeart = () => {
    if (heartSrc === "/images/eShop/heartWhite.svg") {
      setHeartSrc("/images/eShop/heartBlack.svg");
      setBgColor("#FBB13C");
    } else {
      setHeartSrc("/images/eShop/heartWhite.svg");
      setBgColor("");
    }
  };

  const handleHeartClick = () => toggleHeart();

  const handleMouseEnter = () => {
    if (bgColor === "") {
      setHeartSrc("/images/eShop/heartBlack.svg");
    }
  };

  const handleMouseLeave = () => {
    if (bgColor === "") {
      setHeartSrc("/images/eShop/heartWhite.svg");
    }
  };

  return {
    heartSrc,
    bgColor,
    handleHeartClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};

// ....Show more Products in E-Shop..................

export const useProductDisplay = (allProducts: EShopProductProps[]) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const displayedProducts = showAllProducts
    ? allProducts
    : allProducts.slice(0, 6);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  return { displayedProducts, showAllProducts, toggleShowAllProducts };
};

// ...........Heart Icon Toggle..................

export const useHeartToggle = () => {
  const [heartSrc, setHeartSrc] = useState("/images/eShop/heartWhite.svg");
  const [bgColor, setBgColor] = useState("");

  const handleHeartClick = () => {
    if (heartSrc === "/images/eShop/heartWhite.svg") {
      setHeartSrc("/images/eShop/heartBlack.svg");
      setBgColor("#FBB13C");
    } else {
      setHeartSrc("/images/eShop/heartWhite.svg");
      setBgColor("");
    }
  };

  const handleMouseEnter = () => {
    if (bgColor === "") {
      setHeartSrc("/images/eShop/heartBlack.svg");
    }
  };

  const handleMouseLeave = () => {
    if (bgColor === "") {
      setHeartSrc("/images/eShop/heartWhite.svg");
    }
  };

  return {
    heartSrc,
    bgColor,
    handleHeartClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};

//.........Input Range Style................

export const useRangeSlider = (
  rangeRef: RefObject<HTMLInputElement>,
  rangeValue: string
) => {
  useEffect(() => {
    if (rangeRef.current) {
      const min = parseFloat(rangeRef.current.min);
      const max = parseFloat(rangeRef.current.max);
      const value = parseFloat(rangeValue);
      const percentage = ((value - min) / (max - min)) * 100;
      rangeRef.current.style.background = `linear-gradient(to right, #fbb13c 0%, #fbb13c ${
        percentage - 1
      }%, transparent ${percentage}%, transparent 100%)`;
    }
  }, [rangeRef, rangeValue]);
};
