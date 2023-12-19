import { POSTS_PER_PAGE } from '../config/';
import Link from 'next/link';
import classNames from 'classnames';

interface IPagination {
  path: string;
  pageTotal: number;
  currentPage: number;
}

const Pagination = ({ pageTotal, currentPage, path }: IPagination) => {
  // pagination은 pageTotal이 기준보다 클 때 보여주자.
  const isFirst = currentPage === 1 && pageTotal > POSTS_PER_PAGE;
  const isLast = currentPage === pageTotal && pageTotal > POSTS_PER_PAGE;

  const linkButtonClasses =
    'text-xl m-0 px-1 py-1.5 hover:cursor-pointer hover:-translate-y-0.5';

  return (
    <nav className="flex justify-center items-center gap-1.5 m-4">
      {isLast && (
        <Link className={linkButtonClasses} href={`/${path}/1`}>
          &lt;
        </Link>
      )}
      {pageTotal &&
        Array(pageTotal)
          .fill(0)
          .map((_, i) => (
            <Link
              key={i + 1}
              href={`/${path}/${i + 1}`}
              data-iscurrent={i === currentPage - 1}
              className={classNames(linkButtonClasses, {
                'text-[color:var(--theme1-color)] font-bold':
                  i === currentPage - 1,
              })}
            >
              {i + 1}
            </Link>
          ))}
      {isFirst && (
        <Link className={linkButtonClasses} href={`/${path}/${pageTotal}`}>
          &gt;
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
