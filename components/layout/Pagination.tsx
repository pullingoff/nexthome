import Link from "next/link";
import classNames from "classnames";
import { POSTS_PER_PAGE } from "config";

interface Pagination {
  path: string;
  totalPageCount: number;
  currentPage: number;
}

const Pagination = ({ totalPageCount, currentPage, path }: Pagination) => {
  // pagination은 pageTotal이 기준보다 클 때 보여주자.
  const isFirst = currentPage === 1 && totalPageCount > POSTS_PER_PAGE;
  const isLast =
    currentPage === totalPageCount && totalPageCount > POSTS_PER_PAGE;

  const linkButtonClasses =
    "text-xl m-0 px-1 py-1.5 hover:cursor-pointer hover:-translate-y-0.5";

  return (
    <nav className="flex justify-center items-center gap-1.5 m-4">
      {isLast && (
        <Link className={linkButtonClasses} href={`/${path}/1`}>
          &lt;
        </Link>
      )}
      {totalPageCount &&
        Array(totalPageCount)
          .fill(0)
          .map((_, i) => (
            <Link
              key={i + 1}
              href={`/${path}/${i + 1}`}
              data-iscurrent={i === currentPage - 1}
              className={classNames(linkButtonClasses, {
                "text-deep-brown font-bold": i === currentPage - 1,
              })}
            >
              {i + 1}
            </Link>
          ))}
      {isFirst && (
        <Link className={linkButtonClasses} href={`/${path}/${totalPageCount}`}>
          &gt;
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
