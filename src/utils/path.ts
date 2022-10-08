export const path = <T>(module: unknown, pathString: string): T | null => {
  if (!module) return null

  const [firstPath, ...paths] = pathString.split('.')
  let fullPath = module[firstPath]

  for (const path of paths) {
    if (!fullPath) return null
    fullPath = fullPath[path]
  }

  return fullPath
}
