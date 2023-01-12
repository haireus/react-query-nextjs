import { useInfiniteQuery } from '@tanstack/react-query';
// Utils
import { fetchMovies } from '@utils';
// Types
import { Movies } from '@types';
import { queryKey } from '@configs';

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(
    [queryKey.MOVIE, search],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
