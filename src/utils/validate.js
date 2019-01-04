export function isvalidUsername (str) {
  // eslint-disable-next-line
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
