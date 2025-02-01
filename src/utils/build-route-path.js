export function buildRoutePath(path) {
  const routeParametersRegex = /:(?<$1>[a-zA-Z]+)/g
  const pathWithParamans = path.replaceAll(routeParametersRegex, '([a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParamans}`)

  return pathRegex
}