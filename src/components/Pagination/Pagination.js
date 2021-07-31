import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import queryString from "query-string";

import styles from './Pagination.module.css';

export const Pagination = () => {
  const { page, total_pages } = useSelector(({ movies }) => movies);
  const location = useLocation();
  const history = useHistory();

  const handlerClick = (page) => {
    const query = queryString.parse(location.search);
    query.page = page;

    history.push('/movies?' + queryString.stringify(query));
  }

  return (
      <div className={styles.wrapper}>
        <div>
          <button disabled={page === 1} onClick={() => handlerClick(1)}>first page</button>
          <button disabled={page - 1 <= 0} onClick={() => handlerClick(page - 1)}>prev page</button>
          <span>{page} of {total_pages}</span>
          <button disabled={page + 1 > total_pages} onClick={() => handlerClick(page + 1)}>next page</button>
          <button disabled={page === total_pages} onClick={() => handlerClick(total_pages)}>last page</button>
        </div>
      </div>
  );
}
