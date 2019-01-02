export function isvalidUsername (str) {
  const valid_map = ['admin', 'editor1']
  return valid_map.indexOf(str.trim()) >= 0
}
