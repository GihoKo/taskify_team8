/**
 * 문제가 하나 있다. 중복 문제는 해결하지 못한다. 근데 굳이 전역으로 관리까지 할 필요가 있나?
 * @see https://tkdodo.eu/blog/effective-react-query-keys
 * @see https://tanstack.com/query/v4/docs/react/community/lukemorales-query-key-factory
 */

// key로 모든 것을 관리한다.
// tanstack query 라이르러리 내부 코드를 보면 key들을 특별하게 판단하는 정규표현식이 있음!

// query key를 관리 하는 곳
export const dashboardKeys = {
  masterKey: () => ['dashboard'] as const, // ['dashboard']
  dashboardList: () => [...dashboardKeys.masterKey(), 'dashboardList'] as const, // ['dashboard,'dashboard']
  currentPage: (currentPage: number) => [...dashboardKeys.dashboardList(), currentPage] as const, // ['dashboard,'dashboard', currentPage]
};

// const queryClient = useQueryClient();
// // 강제로 현재 쿼리 데이터를 무효화 시킨다. -> 해당 데이터를 가져오는 컴포넌트는 새로 데이터를 가져와서 쿼리에 넣는다.
// queryClient.invalidateQueries(dashboardKeys.masterKey);

// // { exact: true } 옵션을 사용하면 해당 키에 정확하게 해당하는 쿼리만 무효화 시킨다.
// // 하위 키를 무효화 시키지는 않는다.
// queryClient.invalidateQueries(dashboardKeys.masterKey, { exact: true });
