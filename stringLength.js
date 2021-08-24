function stringLength(string) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count += 1;
  }
  if (count > 0 && count <= 10) {
    return count;
  }
  return false;
}

module.exports = stringLength;