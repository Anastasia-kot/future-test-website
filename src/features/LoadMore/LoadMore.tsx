import styles from "./LoadMore.module.css"; 
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {  RootState } from "../../redux/redux-store";
import {   loadMoreBooks } from "../../redux/app-reducer";

export const LoadMore = () => {
  const isFetching: boolean = useSelector(
    (state: RootState) => state.appPage.isFetching
  );
  const booksTotalCount = useSelector(
    (state: RootState) => state.appPage.booksTotalCount
  );
  const currentPage = useSelector(
    (state: RootState) => state.appPage.currentPage
  );
  const searchParameters = useSelector(
    (state: RootState) => state.appPage.searchParameters
  );

  const dispatch = useDispatch();
  
  //@ts-ignore
  const onClick = () => {dispatch(loadMoreBooks({ ...searchParameters, currentPage: currentPage + 1 }));
  };

  return (
    <button
      className={styles.loadMoreButton}
      disabled={
        (currentPage ? currentPage + 1 : 1) * 30 >=
          (booksTotalCount ? booksTotalCount : 0) || isFetching
      }
      onClick={onClick}
    >
      Load more
    </button>
  );
};
