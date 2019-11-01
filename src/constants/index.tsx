export const RouteKeys = {
  INDEX: "INDEX",
  ABOUT: "ABOUT",
  H5: "H5",
};
const RoutesMap = {
  INDEX: "/pages/index/index",
  ABOUT: "/pages/about/about",
  H5: "/pages/h5/h5",
};
export function routeCreator(page: string, query?: object): { url: string } {
  const queryString = getQueryString(query);
  const urlPrefix = RoutesMap[page];
  return { url: `${urlPrefix}?${queryString}` };
}

function getQueryString(query?: object): string {
  if (query && typeof query === "object") {
    let queryString = "";
    for (const key in query) {
      queryString += `${key}=${query[key]}&`;
    }
    return queryString;
  } else {
    return "";
  }
}
